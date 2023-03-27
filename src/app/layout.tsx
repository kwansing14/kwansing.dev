import "./globals.css";
import Script from "next/script";
import { ServerThemeProvider } from "@wits/next-themes";
import ThemeWrapper from "@/components/ThemeWrapper";

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
        <Script
          id="passiveEvents"
          type="text/javascript"
          src="https://unpkg.com/default-passive-events"
          async
        />
        <body>
          <ThemeWrapper>{children}</ThemeWrapper>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
