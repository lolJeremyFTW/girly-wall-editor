import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Girly Wall Art Editor",
  description: "Create beautiful wall art and posters with aesthetic elements",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
