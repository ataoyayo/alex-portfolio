import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Portfolio",
  description: "A bilingual personal portfolio for communication projects, content experiments, media practice, and AI workflows."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
