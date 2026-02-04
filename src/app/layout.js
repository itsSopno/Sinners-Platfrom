import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientRoot from "./ClientRoot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Studio Sinners — Strategic Digital Laboratory",
  description:
    "We engineer high-performance web experiences that bridge the gap between human emotion and digital precision. Brand identity, experience design, and system architecture.",
  openGraph: {
    title: "Studio Sinners — Strategic Digital Laboratory",
    description: "Building digital legacies. Brand identity, experience design, system architecture.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
