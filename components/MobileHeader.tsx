"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 상단 고정 헤더 */}
      <header className="md:hidden w-full px-6 py-4 flex justify-between items-center border-b fixed bg-white z-50">
        <span className="font-bold text-xl tracking-tight">JOOSUNG KIM</span>

        {/* 햄버거 버튼 */}
        <button
          type="button"
          className="inline-flex flex-col justify-center items-center space-y-[4px] transition-transform"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {/* 위 막대 */}
          <span
            className={`block h-[2px] w-6 bg-gray-800 transition-all duration-300 ${
              open ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          {/* 가운데 막대 */}
          <span
            className={`block h-[2px] w-6 bg-gray-800 transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          {/* 아래 막대 */}
          <span
            className={`block h-[2px] w-6 bg-gray-800 transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </header>

      {/* 드롭다운 메뉴 (CSS transition으로 슬라이드 + 페이드) */}
      <nav
        className={`md:hidden fixed left-0 w-full border-b bg-white z-40 overflow-hidden transition-all duration-200
        ${
          open
            ? "top-[64px] max-h-40 opacity-100"
            : "top-[64px] max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-4xl px-8 py-4 flex flex-col space-y-4 text-gray-800">
          {["Work", "Fun", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-lg font-medium tracking-wide hover:text-black transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
