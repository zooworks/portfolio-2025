"use client";
import WhatIDo from "@/components/WhatIDo";
import Resume from "@/components/Resume";
export default function Contact() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-start">
      {/* Left Text Section */}
      <div>
        <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-2">
          Areas of Expertise
        </h3>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-[1.05]">
          Product Designer <br />
          based in Seoul,
          <br /> South Korea
        </h1>

        <p className="text-gray-700 mb-4 leading-relaxed">
          I specialize in gathering digital product designs through various UX
          design methodologies based on research and UX strategy.
        </p>

        <p className="text-gray-700 mb-8 leading-relaxed">
          I have gained strong analytical and strategic planning skills by
          working on various projects across blockchain, finance, and
          entertainment. I conduct qualitative analysis through user research
          and align real data to drive results. I enjoy acquiring domain
          knowledge specific to each project and am adept at balancing user and
          client feedback to create contextually relevant service experiences.
        </p>

        {/* Contact Info */}
        <div className="space-y-2 text-gray-800 font-medium text-base">
          <p>
            <span className="font-semibold text-gray-600">Email:</span>{" "}
            <a
              href="mailto:pride04170@g.hongik.ac.kr"
              className="text-blue-600 underline"
            >
              pride04170@g.hongik.ac.kr
            </a>
          </p>
          <p>
            <span className="font-semibold text-gray-600">Phone:</span> (+82)
            10-9000-6026
          </p>
          <p>
            <span className="font-semibold text-gray-600">Instagram:</span>{" "}
            <a
              href="https://www.instagram.com/zoo.works/"
              target="_blank"
              className="text-blue-600 underline"
            >
              @zoo.works
            </a>
          </p>
          <p>
            <span className="font-semibold text-gray-600">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/joosung-kim-8615b7235/"
              target="_blank"
              className="text-blue-600 underline"
            >
              Click here
            </a>
          </p>
        </div>
      </div>

      {/* Right Image Section */}
      {/* 모바일에서는 숨기고(md 이상에서 flex), 상단 정렬 */}
      <div className="hidden md:flex justify-end items-start">
        <img
          src="/me.png"
          alt="Profile of Joosung Kim"
          className="
            self-start                 /* 이미지 자체도 위 정렬 */
            w-[360px] lg:w-[440px] xl:w-[520px]
            h-auto object-contain
            -mt-[6px]                 /* 필요 시 미세 상단 정렬 (값 가감해 맞춰줘) */
            rounded-xl
          "
        />
      </div>
      <div className="col-span-full">
        <WhatIDo />
      </div>
      <div className="col-span-full">
        <Resume />
      </div>
    </section>
  );
}
