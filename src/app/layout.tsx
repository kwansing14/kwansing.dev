import "./globals.css";
import Script from "next/script";
import Head from "next/head";
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
    <html lang="en" suppressHydrationWarning>
      <Head>
        <Script src="/theme.js" strategy="beforeInteractive" />
      </Head>
      <Script
        type="text/javascript"
        src="https://unpkg.com/default-passive-events"
      />
      <body>{children}</body>
    </html>
  );
}
