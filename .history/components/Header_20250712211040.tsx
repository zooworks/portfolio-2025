import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full px-6 flex justify-between items-center border-b">
      <h1 className="text-xl font-bold">Jun Kim</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/work">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/fun">Fun</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
