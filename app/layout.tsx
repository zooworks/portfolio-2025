// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 필요하면 roboto.variable 제거 가능
    <html
      lang="en"
      className={`${manrope.variable} ${roboto.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      {/* font-sans를 Manrope로 매핑했다면 전체가 Manrope로 표시됩니다 */}
      <body className="bg-white text-gray-900 font-sans antialiased">
        {/* 모바일 헤더 */}
        <header className="md:hidden w-full px-6 py-4 flex justify-between items-center border-b fixed bg-white z-50">
          <span className="font-bold text-xl">JOOSUNG KIM</span>
          <nav className="flex space-x-4 text-sm text-gray-600">
            <Link href="/work" className="hover:underline">
              Work
            </Link>
            <Link href="/fun" className="hover:underline">
              Fun
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </header>

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
