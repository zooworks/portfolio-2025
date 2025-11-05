// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import MobileHeader from "@/components/MobileHeader";

import { Manrope, Roboto, Geist, Geist_Mono } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Joosung Kim – Portfolio",
  description: "A thoughtful designer portfolio",
  icons: {
    icon: "/favicon.ico", // or your custom png
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${roboto.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-white text-gray-900 font-sans antialiased">
        {/* 모바일 헤더 (햄버거 메뉴) */}
        <MobileHeader />

        {/* 전체 레이아웃 */}
        <div className="flex min-h-screen">
          <div className="hidden md:flex">
            <Sidebar />
          </div>
          <div className="flex flex-col flex-1 w-full px-6 pt-10 md:ml-64 mt-[64px] md:mt-0">
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
