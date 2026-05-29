import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";

type SpotifyResponse = {
  isPlaying: boolean;
  title: string;
  artist: string;
  albumArt: string | null;
  url: string | null;
};

const offline: SpotifyResponse = {
  isPlaying: false,
  title: "Not playing",
  artist: "Spotify",
  albumArt: null,
  url: "https://open.spotify.com/user/aryanbains",
};

async function getAccessToken() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) return null;

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const res = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
    cache: "no-store",
  });

  if (!res.ok) return null;
  const data = (await res.json()) as { access_token?: string };
  return data.access_token ?? null;
}

function trackToResponse(item: any, isPlaying: boolean): SpotifyResponse {
  return {
    isPlaying,
    title: item?.name ?? offline.title,
    artist:
      (item?.artists ?? []).map((a: { name: string }) => a.name).join(", ") ||
      offline.artist,
    albumArt: item?.album?.images?.[0]?.url ?? null,
    url: item?.external_urls?.spotify ?? offline.url,
  };
}

export async function GET() {
  try {
    const token = await getAccessToken();
    if (!token) {
      // No credentials configured — degrade gracefully.
      return NextResponse.json(offline);
    }

    const now = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });

    if (now.status === 200) {
      const data = await now.json();
      if (data?.item) {
        return NextResponse.json(trackToResponse(data.item, Boolean(data.is_playing)));
      }
    }

    // Nothing playing — fall back to the most recently played track.
    const recent = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });

    if (recent.ok) {
      const data = await recent.json();
      const item = data?.items?.[0]?.track;
      if (item) return NextResponse.json(trackToResponse(item, false));
    }

    return NextResponse.json(offline);
  } catch {
    return NextResponse.json(offline);
  }
}
