// app/components/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const isProjectPage = pathname.startsWith("/work/project");

  // ✅ 프로젝트 상세 페이지
  if (isProjectPage) {
    return (
      <aside className="hidden md:flex w-64 flex-col fixed h-screen border-r px-6 py-10">
        <button
          onClick={() => router.back()}
          className="text-2xl font-bold mb-10 hover:underline text-left"
        >
          ← Back
        </button>
      </aside>
    );
  }

  // ✅ 기본 사이드바
  return (
    <aside className="hidden md:flex w-64 flex-col fixed h-screen border-r px-6 py-10">
      <Link href="/work" className="text-2xl font-bold mb-10 hover: text-left">
        JOOSUNG KIM
      </Link>
      <nav className="flex flex-col space-y-4 text-xl text-gray-600">
        <Link
          href="/work"
          className={clsx(
            "hover:underline",
            pathname === "/work" && "font-bold text-black"
          )}
        >
          Work
        </Link>
        <Link
          href="/fun"
          className={clsx(
            "hover:underline",
            pathname === "/fun" && "font-bold text-black"
          )}
        >
          Fun
        </Link>
        <Link
          href="/contact"
          className={clsx(
            "hover:underline",
            pathname === "/contact" && "font-bold text-black"
          )}
        >
          Contact
        </Link>
      </nav>
    </aside>
  );
}
