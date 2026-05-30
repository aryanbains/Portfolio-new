import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import AgentOverlayProvider from "@/components/AgentOverlay";
import GlassFilters from "@/components/GlassFilters";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aryanbains.dev"),
  title: "Aryan Bains | Founder, Builder",
  description:
    "Aryan Bains builds the systems that let agents work: context, tools, execution, control, memory, and debugging. AI Infrastructure Engineer · Agent Systems Builder · Founder at SuperMind.",
  keywords: [
    "Aryan Bains",
    "AI Infrastructure",
    "Agent Systems",
    "SuperMind",
    "AI Engineer",
  ],
  authors: [{ name: "Aryan Bains" }],
  openGraph: {
    title: "Aryan Bains | Founder, Builder",
    description: "I build the systems that let agents work.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@AryanBains2",
    title: "Aryan Bains | Founder, Builder",
    description: "I build the systems that let agents work.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f5f2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Prevent flash of un-themed content */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');if(t==='dark')document.documentElement.classList.add('dark')}catch(e){}})()`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <GlassFilters />
        <AgentOverlayProvider>
          <Navbar />
          {children}
        </AgentOverlayProvider>
      </body>
    </html>
  );
}
