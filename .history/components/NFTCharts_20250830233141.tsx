// components/ResearchBlock.tsx
import Image from "next/image";

type Bullet = { text: string; bold?: string };
type Props = {
  eyebrow?: string; // 예: "I. Project background"
  title: string; // 큰 제목
  subtitle?: string; // 서브제목
  bullets?: Bullet[]; // 왼쪽 불릿들
  highlight?: string; // 마지막 요약 한줄
  // 오른쪽 컨텐츠: 이미지 or children (차트)
  imageSrc?: string;
  imageAlt?: string;
  imageRatio?: string; // 예: "aspect-[4/3]"
  children?: React.ReactNode;
  sourceNote?: string; // 우하단 소스 텍스트
};

export default function ResearchBlock({
  eyebrow,
  title,
  subtitle,
  bullets = [],
  highlight,
  imageSrc,
  imageAlt = "",
  imageRatio = "aspect-[4/3]",
  children,
  sourceNote,
}: Props) {
  return (
    <section className="mt-10 md:mt-14">
      {/* 상단 라벨/제목영역 */}
      {eyebrow && (
        <div className="text-xs tracking-wide text-gray-500 uppercase mb-2">
          {eyebrow}
        </div>
      )}
      {subtitle && <div className="text-sm text-gray-500 mb-1">{subtitle}</div>}
      <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>

      {/* 본문 2컬럼 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
        {/* 왼쪽 텍스트 */}
        <div className="text-gray-700">
          {bullets.length > 0 && (
            <ul className="list-disc pl-5 space-y-3">
              {bullets.map((b, i) => (
                <li key={i} className="leading-relaxed">
                  {b.bold ? (
                    <>
                      <span className="font-semibold">{b.bold}</span>
                      {b.text}
                    </>
                  ) : (
                    b.text
                  )}
                </li>
              ))}
            </ul>
          )}
          {highlight && (
            <p className="mt-4">
              {highlight.split("**").map((chunk, i) =>
                i % 2 === 1 ? (
                  <span key={i} className="font-semibold">
                    {chunk}
                  </span>
                ) : (
                  chunk
                )
              )}
            </p>
          )}
        </div>

        {/* 오른쪽 비주얼: 이미지 or children(차트) */}
        <div className="w-full">
          {imageSrc ? (
            <div
              className={`${imageRatio} relative rounded-xl overflow-hidden`}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                priority={false}
              />
            </div>
          ) : (
            <div className="rounded-xl border border-gray-200 bg-white p-3">
              {children}
            </div>
          )}
          {sourceNote && (
            <p className="text-[11px] text-gray-400 mt-2">{sourceNote}</p>
          )}
        </div>
      </div>
    </section>
  );
}
