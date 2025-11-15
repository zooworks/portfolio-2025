import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <>
      <div className="px-6 max-w-4xl mx-auto antialiased">
        {/* 헤딩들 사이 간격은 space-y로 통일 */}
        <div className="space-y-1.5 md:space-y-2">
          {/* 1줄차이: 점을 span 안으로 넣어서 'Joosung.' 으로 표시 */}
          <h1
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl
                   font-light leading-[1.15] tracking-[-0.01em]"
          >
            Hello, I’m{" "}
            <span className="font-semibold text-black">Joosung.</span>
          </h1>

          <h2
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl
                   font-light leading-[1.15] tracking-[-0.01em]"
          >
            I’m a Product Designer
          </h2>

          <h3
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl
                   font-light leading-[1.15] tracking-[-0.01em]"
          >
            {/* 데스크톱은 예전 그대로, 모바일에서만 intuitive 뒤에서 줄바꿈 */}
            who crafts <span className="font-semibold text-black">
              clear
            </span>, <span className="font-semibold text-black">intuitive</span>
            , <br className="sm:hidden" />
            {"and "}
            <span className="font-semibold text-black">
              emotionally resonant
            </span>{" "}
            experiences.
          </h3>
        </div>

        <p className="mt-6 text-sm text-gray-500 uppercase tracking-wide">
          Based in Seoul
          <br />
          Hongik Interaction Design ‘25
          <br />
          Previously @ Blockwave Labs
        </p>
      </div>

      {/* ====== 프로젝트 카드 섹션 ====== */}
      <div className="px-6 py-10 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 카드 2 */}
          <Link
            href="/work/project2"
            className="group block rounded-[20px] overflow-hidden shadow-md"
          >
            <div className="relative w-full aspect-[4/4]">
              <Image
                src="/jjikgomoney.png"
                alt="Coding Test App Project - CODEE"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h3 className="text-white text-sm sm:text-base font-semibold">
                  Snapcash - Instant NFT Minting Camera Solution
                </h3>
                <p className="text-white text-xs sm:text-sm mt-1">
                  / 2024.09 – 2025.01
                </p>
              </div>
            </div>
          </Link>

          {/* 카드 1 */}
          <Link
            href="/work/project1"
            className="group block rounded-[20px] overflow-hidden"
          >
            <div className="relative w-full aspect-[4/4]">
              <Image
                src="/kurly_BI_2.jpg"
                alt="Kurly Project"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h3 className="text-white text-sm sm:text-base font-semibold leading-tight">
                  Case study - Market Kurly UX Revamp and New Service Planning
                </h3>
                <p className="text-white text-xs sm:text-sm mt-1">
                  / 2023.05 – 2023.07
                </p>
              </div>
            </div>
          </Link>

          {/* 카드 3 */}
          <Link
            href="/work/project3"
            className="group block rounded-[20px] overflow-hidden shadow-md"
          >
            <div className="relative w-full aspect-[4/4]">
              <Image
                src="/project3.png"
                alt="codee"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105 object-[60%_center]"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h3 className="text-white text-sm sm:text-base font-semibold leading-tight">
                  Thesis - Human with AI/work in progress
                </h3>
                <p className="text-white text-xs sm:text-sm mt-1">
                  / 2024.09 – 2025.08
                </p>
              </div>
            </div>
          </Link>

          {/* 카드 4 */}
          <Link
            href="/work/project4"
            className="group block rounded-[20px] overflow-hidden shadow-md"
          >
            <div className="relative w-full aspect-[4/4]">
              <Image
                src="/project4.png"
                alt="Thesis – Human with AI"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105 object-[60%_center]"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h3 className="text-white text-sm sm:text-base font-semibold leading-tight">
                  Codee - AI-powered adaptive coding practice app for job
                  seekers.
                </h3>
                <p className="text-white text-xs sm:text-sm mt-1">
                  / 2024.09 – 2025.08
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
