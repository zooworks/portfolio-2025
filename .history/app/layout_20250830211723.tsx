import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Roboto } from "next/font/google";
import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // 원하는 굵기만 선택 가능
  variable: "--font-roboto", // 커스텀 변수명
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joosung Kim – Portfolio",
  description: "A thoughtful designer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans antialiased`}>
        {/* ✅ 모바일 헤더는 항상 최상단에 */}
        <header className="md:hidden w-full px-6 py-4 flex justify-between items-center border-b fixed bg-white z-50">
          <span className="font-bold text-xl">JOOSUNG KIM</span>
          <nav className="flex space-x-4 text-base text-gray-600">
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

        {/* ✅ 전체 레이아웃 */}
        <div className="flex min-h-screen">
          {/* 데스크탑 전용 사이드바 */}
          <div className="hidden md:flex">
            <Sidebar />
          </div>

          {/* 메인 콘텐츠 + 푸터 */}
          <div className="flex flex-col flex-1 w-full px-6 pt-10 md:ml-64 mt-[64px] md:mt-0">
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
