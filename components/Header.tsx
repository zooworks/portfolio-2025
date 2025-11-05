// components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="hidden md:flex w-full px-6 py-4 justify-between items-center border-b">
      <span className="font-bold text-xl">JOOSUNG KIM</span>
      <nav className="flex space-x-4 text-sm text-gray-600">
        <Link href="/work" className="hover:underline">Work</Link>
        <Link href="/fun" className="hover:underline">Fun</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </nav>
    </header>
  );
}
