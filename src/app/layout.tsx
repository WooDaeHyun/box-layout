import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Box Layout",
  description: "positioning box layout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main className="app-layout">{children}</main>
      </body>
    </html>
  );
}
