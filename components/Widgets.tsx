"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";

/* ------------------------------------------------------------------ */
/* Widget 1 - Spotify Now Playing                                      */
/* ------------------------------------------------------------------ */

type NowPlaying = {
  isPlaying: boolean;
  title: string;
  artist: string;
  albumArt: string | null;
  url: string | null;
};

function SpotifyWidget() {
  const [data, setData] = useState<NowPlaying | null>(null);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const res = await fetch("/api/spotify", { cache: "no-store" });
        const json = (await res.json()) as NowPlaying;
        if (active) setData(json);
      } catch { /* keep previous state */ }
    };
    load();
    const id = setInterval(load, 30000);
    return () => { active = false; clearInterval(id); };
  }, []);

  const playing = data?.isPlaying ?? false;

  return (
    <a
      href={data?.url ?? "https://open.spotify.com"}
      target="_blank"
      rel="noopener noreferrer"
      className="group glass flex h-full flex-col justify-between rounded-2xl border border-ink/10 p-6 transition-all duration-500 ease-apple hover:-translate-y-1"
    >
      <div className="relative z-10 flex items-center justify-between">
        <span className="eyebrow">{playing ? "Now Playing" : "Spotify"}</span>
        {playing ? (
          <span className="eq" aria-hidden>
            <span /><span /><span /><span />
          </span>
        ) : (
          <span className="text-xs text-ink/40">Currently offline</span>
        )}
      </div>

      <div className="relative z-10 mt-8 flex items-center gap-4">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-ink/10 bg-ink/5"
          aria-hidden
        >
          {data?.albumArt ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={data.albumArt} alt="" className="h-full w-full object-cover" loading="lazy" />
          ) : (
            <span className="text-ink/40">&#9834;</span>
          )}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-base font-semibold tracking-tight">
            {data?.title ?? "Loading..."}
          </span>
          <span className="block truncate text-sm text-ink/50">{data?.artist ?? ""}</span>
        </span>
      </div>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Widget 2 - GitHub Profile (live)                                   */
/* ------------------------------------------------------------------ */

type GHProfile = {
  name: string;
  login: string;
  bio: string | null;
  avatar_url: string;
  public_repos: number;
  html_url: string;
};

function GitHubWidget() {
  const [data, setData] = useState<GHProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/aryanbains", {
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((d: GHProfile | null) => { setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <a
      href="https://github.com/aryanbains/"
      target="_blank"
      rel="noopener noreferrer"
      className="group glass flex h-full flex-col justify-between rounded-2xl border border-ink/10 p-6 transition-all duration-500 ease-apple hover:-translate-y-1"
    >
      <div className="relative z-10 flex items-center justify-between">
        <span className="eyebrow">GitHub</span>
        <svg
          aria-hidden
          className="text-ink/30 transition-colors duration-300 group-hover:text-ink/70"
          width="15" height="15" viewBox="0 0 16 16" fill="currentColor"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </div>

      <div className="relative z-10 mt-6 flex items-center gap-3">
        {data?.avatar_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={data.avatar_url}
            alt={data.name}
            className="h-11 w-11 shrink-0 rounded-full border border-ink/10"
            loading="lazy"
          />
        ) : (
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-ink/5 text-ink/30">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </span>
        )}
        <div className="min-w-0">
          <p className="truncate text-base font-semibold tracking-tight">
            {loading ? "Loading..." : (data?.name ?? "Aryan Bains")}
          </p>
          <p className="text-sm text-ink/50">@{data?.login ?? "aryanbains"}</p>
        </div>
      </div>

      {data?.bio && (
        <p className="relative z-10 mt-4 line-clamp-2 text-sm leading-relaxed text-ink/55">
          {data.bio}
        </p>
      )}

      <div className="relative z-10 mt-6 flex items-center gap-6 border-t border-ink/10 pt-4">
        <div>
          <p className="text-xl font-semibold" style={{ color: "var(--accent-bright)" }}>
            {data?.public_repos ?? "--"}
          </p>
          <p className="mt-0.5 text-xs uppercase tracking-wider text-ink/40">Repositories</p>
        </div>
        <span
          className="ml-auto text-xs text-ink/30 transition-colors duration-300 group-hover:text-ink/60"
          aria-hidden
        >
          &#x2197;
        </span>
      </div>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Widget 3 - X / Twitter Profile                                     */
/* ------------------------------------------------------------------ */

function XWidget() {
  return (
    <a
      href="https://x.com/AryanBains2"
      target="_blank"
      rel="noopener noreferrer"
      className="group glass flex h-full flex-col justify-between rounded-2xl border border-ink/10 p-6 transition-all duration-500 ease-apple hover:-translate-y-1"
    >
      <div className="relative z-10 flex items-center justify-between">
        <span className="eyebrow">X / Twitter</span>
        <svg
          aria-hidden
          className="text-ink/30 transition-colors duration-300 group-hover:text-ink/70"
          width="15" height="15" viewBox="0 0 24 24" fill="currentColor"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>

      <div className="relative z-10 mt-6 flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://unavatar.io/twitter/AryanBains2"
          alt="Aryan Bains"
          className="h-11 w-11 shrink-0 rounded-full border border-ink/10"
          loading="lazy"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
        <div>
          <p className="text-base font-semibold tracking-tight">Aryan Bains</p>
          <p className="text-sm text-ink/50">@AryanBains2</p>
        </div>
      </div>

      <p className="relative z-10 mt-4 text-sm leading-relaxed text-ink/55">
        Building AI systems that do real work. Founder&nbsp;@Lucentra. Shipping from Pune.
      </p>

      <div className="relative z-10 mt-6 flex items-center justify-between border-t border-ink/10 pt-4">
        <span className="text-xs font-medium text-ink/40 transition-colors duration-300 group-hover:text-ink/70">
          Follow on X
        </span>
        <span
          className="text-xs text-ink/30 transition-colors duration-300 group-hover:text-ink/60"
          aria-hidden
        >
          &#x2197;
        </span>
      </div>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export default function Widgets() {
  return (
    <section id="widgets" className="px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-10">Live</p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal index={0}>
            <div className="h-full">
              <SpotifyWidget />
            </div>
          </Reveal>
          <Reveal index={1}>
            <div className="h-full">
              <GitHubWidget />
            </div>
          </Reveal>
          <Reveal index={2}>
            <div className="h-full">
              <XWidget />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
