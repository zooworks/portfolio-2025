import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <>
      <div className="px-6 max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
          Hello, I’m <span className="font-semibold text-black">Joosung</span>.
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight mt-2">
          I’m a Product Designer
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight mt-2">
          who crafts <span className="font-semibold text-black">clear</span>,{" "}
          <span className="font-semibold text-black">intuitive</span>,<br />
          and{" "}
          <span className="font-semibold text-black">
            emotionally resonant
          </span>{" "}
          experiences.
        </h3>
        <p className="mt-6 text-sm text-gray-500 uppercase tracking-wide">
          Based in Seoul
          <br />
          Hongik Interaction Design ‘25
          <br />
          Previously @ blockwave labs
        </p>
      </div>

      <div className="px-6 py-10 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 카드 2 - 동일한 형식으로 수정 */}
          <Link
            href="/work/project2"
            className="group block rounded-[20px] overflow-hidden shadow-md"
          >
            <div className="relative w-full aspect-[4/4]">
              <Image
                src="/project2.jpg"
                alt="Coding Test App Project - CODEE"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4">
                <h3 className="text-white text-sm sm:text-base font-semibold leading-tight">
                  Coding Test App Project - CODEE
                </h3>
                <p className="text-white text-xs sm:text-sm mt-1">
                  / 2023.01 – 2023.03
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
                  Case study: Market Kurly UX Revamp and New Service Planning
                </h3>
                <p className="text-white text-xs sm:text-sm mt-1">
                  / 2023.05 – 2023.07
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
