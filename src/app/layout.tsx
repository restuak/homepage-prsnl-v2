import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Wix_Madefor_Display } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "@/components/loading";
import { Roboto } from "next/font/google";
// import SmoothScrolling from "@/components/smooth-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const wixMadeforDisplay = Wix_Madefor_Display({
  variable: "--font-wix-madefor-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Restu Aka Personal Website",
  description: "Restu Aka Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body >
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}