import "./globals.css";
import Script from "next/script";
import { ServerThemeProvider } from "@wits/next-themes";
import ThemeWrapper from "@/components/ThemeWrapper";
import LenisWrapper from "@/components/LenisWrapper";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Kwan Sing - Portfolio",
  description: "Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerThemeProvider attribute="class">
      <html lang="en" suppressHydrationWarning>
        {/* <Script
          id="passiveEvents"
          type="text/javascript"
          src="https://unpkg.com/default-passive-events"
          async
        /> */}
        {/* <Script src="/path/to/highlight.min.js" />
        <Script>hljs.highlightAll();</Script> */}
        {/* favicon */}
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#101010" />

        <meta property="og:title" content="Kwan Sing Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon/mstile-150x150.png" />
        <meta property="og:description" content="Kwan Sing's Portfolio" />
        <meta name="google-adsense-account" content="ca-pub-6022766845001236" />

        <body>
          <ThemeWrapper>
            <LenisWrapper>{children}</LenisWrapper>
          </ThemeWrapper>
          <Analytics />
        </body>
      </html>
    </ServerThemeProvider>
  );
}
