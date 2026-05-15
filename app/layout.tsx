import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EduVerse University",
  description: "Modern University Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
