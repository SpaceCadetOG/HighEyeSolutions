import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "High Eye Solutions | Drone Services",
    template: "%s | High Eye Solutions",
  },
  description:
    "Houston-based professional aerial imaging, inspection support, construction documentation, and drone operations across priority Texas, Louisiana, and Illinois markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
