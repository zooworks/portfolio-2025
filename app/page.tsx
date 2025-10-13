// app/page.tsx
// 루트("/")에서 바로 Work 페이지 내용을 렌더링

import Work from "./work/page"; // ./app/work/page.tsx 의 default export를 불러옴

export const metadata = {
  title: "Work — Joosung Kim",
  description: "Selected product design works by Joosung Kim.",
};

export default function Home() {
  return <Work />;
}
