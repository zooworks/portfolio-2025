"use client";
import { useRef, useState } from "react";

type Card = {
  id: number;
  title: string;
  caption: string;
  img: string;
  icon?: string;
};

const items: Card[] = [
  {
    id: 1,
    title: "Global Experience",
    caption:
      "I spent months abroad for language training and cultural immersion. It broadened my perspective and informs an inclusive design approach.",
    img: "/globalexperience.jpg",
    icon: "🌏",
  },
  {
    id: 2,
    title: "Product Designer",
    caption:
      "I convey strategy through UX wireframes and UI flows, focusing on interactions and design constraints aligned to business goals.",
    img: "/productdesigner.jpg",
    icon: "🗂️",
  },
  {
    id: 3,
    title: "Product Strategy",
    caption:
      "I conduct desk/field research and define focused strategies tailored to each project’s specific theme and context.",
    img: "/strategy.jpg",
    icon: "🧭",
  },
  {
    id: 4,
    title: "MVP & Validation",
    caption:
      "I test realistic prototypes with users to validate assumptions early, and iterate quickly toward product-market fit.",
    img: "/mvp.jpg",
    icon: "🚀",
  },
];

export default function WhatIDo() {
  const railRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  // 드래그 핸들링 (마우스 + 터치)
  const onPointerDown = (e: React.PointerEvent) => {
    const rail = railRef.current;
    if (!rail) return;
    setIsDragging(true);
    rail.setPointerCapture(e.pointerId);
    startX.current = e.clientX;
    scrollLeftStart.current = rail.scrollLeft;
    rail.style.scrollSnapType = "none";
    rail.classList.add("cursor-grabbing");
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const rail = railRef.current;
    if (!rail) return;
    const dx = e.clientX - startX.current;
    rail.scrollLeft = scrollLeftStart.current - dx;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const rail = railRef.current;
    if (!rail) return;
    setIsDragging(false);
    rail.releasePointerCapture(e.pointerId);
    rail.style.scrollSnapType = "x mandatory";
    rail.classList.remove("cursor-grabbing");
  };

  const scrollBy = (dir: "prev" | "next") => {
    const rail = railRef.current;
    if (!rail) return;

    const card = rail.firstElementChild as HTMLElement;
    if (!card) return;

    const gap = parseFloat(getComputedStyle(rail).gap || "24");
    const move = card.offsetWidth + gap;

    rail.scrollBy({
      left: dir === "next" ? move : -move,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative max-w-6xl mx-auto mt-24">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
          What I Do
        </h2>
      </div>

      <div className="relative">
        <div
          ref={railRef}
          className="
            flex overflow-x-auto snap-x snap-mandatory gap-6 pb-2 no-scrollbar
            cursor-grab select-none touch-pan-y scroll-smooth
          "
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {items.map((card) => (
            <article
              key={card.id}
              className="
                snap-start shrink-0
                w-[88%] sm:w-[70%] md:w-[520px]
                bg-white rounded-2xl shadow-sm border border-gray-100
                overflow-hidden transition-transform duration-300 hover:scale-[1.02]
              "
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  draggable={false}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg md:text-xl font-semibold mb-2 flex items-center gap-2">
                  {card.icon && <span className="text-xl">{card.icon}</span>}
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {card.caption}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* ← → 버튼 */}
        <button
          onClick={() => scrollBy("prev")}
          className="
            hidden md:flex absolute left-0 top-1/2 -translate-y-1/2
            w-10 h-10 items-center justify-center rounded-full
            bg-white/90 border border-gray-200 shadow-md
            hover:bg-white hover:scale-110 transition
          "
          aria-label="Previous"
        >
          ←
        </button>

        <button
          onClick={() => scrollBy("next")}
          className="
            hidden md:flex absolute right-0 top-1/2 -translate-y-1/2
            w-10 h-10 items-center justify-center rounded-full
            bg-white/90 border border-gray-200 shadow-md
            hover:bg-white hover:scale-110 transition
          "
          aria-label="Next"
        >
          →
        </button>
      </div>
    </section>
  );
}
