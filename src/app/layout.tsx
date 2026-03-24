import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Sidebar from "@/components/sidebar";

const nexa = localFont({
  src: [
    { path: "../../public/fonts/nexa/Nexa-ExtraLight.ttf", weight: "200" },
    { path: "../../public/fonts/nexa/Nexa-Heavy.ttf", weight: "800" },
  ],
  variable: "--font-nexa",
  display: "swap",
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Website Gacor Anjay Gokil Mantab",
  description: "Made by Kelompok Web",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nexa.variable}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
