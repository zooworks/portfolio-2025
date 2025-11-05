// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        {/* 로고 / 이름 */}
        <Link href="/" className="text-sm font-semibold tracking-[0.18em]">
          JOOSUNG KIM
        </Link>

        {/* 데스크톱 메뉴 */}
        <nav className="hidden gap-8 text-sm text-slate-600 md:flex">
          <Link href="/work" className="hover:text-black">
            Work
          </Link>
          <Link href="/fun" className="hover:text-black">
            Fun
          </Link>
          <Link href="/contact" className="hover:text-black">
            Contact
          </Link>
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="block h-[2px] w-6 bg-slate-800 mb-1" />
          <span className="block h-[2px] w-6 bg-slate-800 mb-1" />
          <span className="block h-[2px] w-6 bg-slate-800" />
        </button>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {open && (
        <nav className="md:hidden border-t border-gray-200 bg-white">
          <div className="mx-auto flex max-w-4xl flex-col px-6 py-3 text-sm text-slate-700">
            <Link href="/work" className="py-2" onClick={() => setOpen(false)}>
              Work
            </Link>
            <Link href="/fun" className="py-2" onClick={() => setOpen(false)}>
              Fun
            </Link>
            <Link
              href="/contact"
              className="py-2"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
