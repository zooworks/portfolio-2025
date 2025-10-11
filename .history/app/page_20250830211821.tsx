// app/page.tsx
// 루트 페이지
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/work");
  return (
    <>
      <div className="px-6 py-24 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 sm:text-5xl md:text-6xl">
          Joosung
        </h1>
        <p className="text-lg text-gray-500">
          A designer crafting thoughtful digital experiences.
        </p>
      </div>
    </>
  );
}
