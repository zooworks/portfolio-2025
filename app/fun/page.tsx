"use client";
import { useEffect, useRef, useState } from "react";

/* ========== 타입 ========== */
type Media =
  | { type: "image"; src: string; objectPosition?: string }
  | { type: "video"; src: string; poster?: string; objectPosition?: string };

type Project = {
  title: string;
  period?: string;
  gallery: Media[];
  coverIndex?: number;
};

/* ========== 데이터 ========== */
const PROJECTS: Project[] = [
  {
    title: "Airforce1 Graphic Album Project",
    period: "2023.01 – 2023.03",
    gallery: [
      { type: "image", src: "/fun1.jpg" },
      { type: "image", src: "/af1_1.jpg" },
      { type: "image", src: "/af1_2.jpg" },
      { type: "image", src: "/af1_3.jpg" },
    ],
  },
  {
    title: "Bulnae Pocha – Korean Street Bar & Grill",
    period: "2020.04 – 2020.07",
    coverIndex: 0,
    gallery: [
      {
        type: "video",
        src: "/project2.mp4",
        poster: "/images/project2_poster.jpg",
        objectPosition: "45% center", // ✅ 카드 커버(영상) 포커스 우측으로 이동
      },
      { type: "image", src: "/Bulnaepocha1.jpg" },
      { type: "image", src: "/Bulnaepocha2.jpg" },
      { type: "image", src: "/Bulnaepocha3.jpg" },
      { type: "image", src: "/Bulnaepocha4.jpg" },
      { type: "image", src: "/Bulnaepocha5.jpg" },
      { type: "image", src: "/Bulnaepocha6.jpg" },
      { type: "image", src: "/Bulnaepocha7.jpg" },
      { type: "image", src: "/Bulnaepocha8.jpg" },
      { type: "image", src: "/Bulnaepocha9.jpg" },
    ],
  },
  {
    title: "Hanbando Package Project",
    period: "2021.04 – 2021.05",
    gallery: [
      { type: "image", src: "/hanbando1_1.jpg", objectPosition: "30% center" },
      { type: "image", src: "/hanbando1_2.jpg" },
      { type: "image", src: "/hanbando1_3.jpg" },
    ],
  },
  {
    title: "Codee",
    period: "2024.02-2024.04",
    coverIndex: 0,
    gallery: [
      {
        type: "video",
        src: "/codee.mp4",
        poster: "/images/project2_poster.jpg",
      },
      { type: "image", src: "/codeegraphic1.png" },
      { type: "image", src: "/codeegraphic2.png" },
      { type: "image", src: "/codeegraphic3.png" },
      { type: "image", src: "/codeegraphic4.png" },
      { type: "image", src: "/codeegraphic5.png" },
      { type: "image", src: "/codeesketch1.png" },
      { type: "image", src: "/codeesketch2.png" },
    ],
  },
  {
    title: "EOE Branding Project",
    period: "2020.12 – 2021.04",
    gallery: [
      { type: "image", src: "/eoe-01.jpg" },
      { type: "image", src: "/eoe-02.jpg" },
      { type: "image", src: "/eoe-03.jpg" },
      { type: "image", src: "/eoe-04.jpg" },
      { type: "image", src: "/eoe-05.jpg" },
      { type: "image", src: "/eoe-06.jpg" },
      { type: "image", src: "/eoe-07.jpg" },
    ],
  },
  {
    title: "Blade Runner Poster Design",
    period: "2024.06 – 2024.06",
    gallery: [{ type: "image", src: "/blade_runner.png" }],
  },
  {
    title: "I'm me - Personality assessment platform",
    period: "2022.07 – 2022.09",
    gallery: [
      { type: "image", src: "/im_me1.jpg" },
      { type: "image", src: "/im_me3.jpg" },
      { type: "image", src: "/im_me4.jpg" },
      { type: "image", src: "/im_me5.jpg" },
    ],
  },
];

/* ========== 페이지 컴포넌트 ========== */
export default function Fun() {
  const [open, setOpen] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);
  const [mediaIndex, setMediaIndex] = useState(0);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const openProject = (pIndex: number, startAt = 0) => {
    setProjectIndex(pIndex);
    setMediaIndex(startAt);
    setOpen(true);
  };

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Fun Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((p, i) => (
          <ProjectCard
            key={i}
            project={p}
            onOpen={() => openProject(i, p.coverIndex ?? 0)}
          />
        ))}
      </div>

      {open && (
        <Lightbox
          project={PROJECTS[projectIndex]}
          mediaIndex={mediaIndex}
          setMediaIndex={setMediaIndex}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}

/* ========== 카드 ========== */
function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const cover = project.gallery[project.coverIndex ?? 0];
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (cover.type !== "video" || !videoRef.current) return;
    const el = videoRef.current;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => !e.isIntersecting && el.pause()),
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [cover]);

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative overflow-hidden rounded-2xl focus:outline-none bg-black aspect-square will-change-transform"
      aria-label={`Open ${project.title}`}
    >
      {/* 커버 미디어 (baseline gap 제거 + 프레임 정확히 채우기) */}
      {cover.type === "image" ? (
        <img
          src={cover.src}
          alt={project.title}
          className="absolute inset-0 block w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
          style={{ objectPosition: cover.objectPosition ?? "center" }}
          draggable={false}
        />
      ) : (
        <video
          ref={videoRef}
          className="absolute inset-0 block w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03] outline-none"
          style={{ objectPosition: cover.objectPosition ?? "center" }}
          src={cover.src}
          poster={cover.poster}
          muted
          playsInline
          autoPlay
          loop
          preload="metadata"
        />
      )}

      {/* 하단 그라디언트 + 텍스트 */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent px-5 py-4 text-left opacity-95 group-hover:opacity-100 transition-opacity">
        <p className="text-white text-base md:text-lg font-semibold drop-shadow-sm">
          {project.title}
        </p>
        {project.period && (
          <p className="text-white/85 text-sm mt-1 drop-shadow-sm">
            / {project.period}
          </p>
        )}
      </div>
    </button>
  );
}

/* ========== 라이트박스 ========== */
function Lightbox({
  project,
  mediaIndex,
  setMediaIndex,
  onClose,
}: {
  project: Project;
  mediaIndex: number;
  setMediaIndex: (i: number) => void;
  onClose: () => void;
}) {
  const startX = useRef<number | null>(null);
  const total = project.gallery.length;
  const prev = () => setMediaIndex((mediaIndex + total - 1) % total);
  const next = () => setMediaIndex((mediaIndex + 1) % total);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mediaIndex, total, onClose]);

  const media = project.gallery[mediaIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      {/* Controls */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/90 hover:text-white text-2xl px-3 py-1"
        aria-label="Close"
      >
        ✕
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-3xl px-3 py-2"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-3xl px-3 py-2"
        aria-label="Next"
      >
        ›
      </button>

      {/* 미디어 래퍼: 둥근모서리 + overflow-hidden + 배경 통일 */}
      <div
        className="relative w-[92vw] h-[86vh] flex items-center justify-center rounded-2xl overflow-hidden bg-black"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => {
          startX.current = e.touches[0].clientX;
        }}
        onTouchMove={(e) => {
          if (startX.current == null) return;
          const diff = e.touches[0].clientX - startX.current;
          if (Math.abs(diff) > 60) {
            diff > 0 ? prev() : next();
            startX.current = null;
          }
        }}
        onTouchEnd={() => {
          startX.current = null;
        }}
      >
        {media.type === "image" ? (
          <img
            src={media.src}
            alt={project.title}
            className="block max-w-full max-h-full w-auto h-auto select-none"
            draggable={false}
          />
        ) : (
          <video
            className="block max-w-full max-h-full w-auto h-auto outline-none"
            src={media.src}
            poster={media.poster}
            controls
            autoPlay
            muted
            playsInline
            loop
          />
        )}
      </div>
    </div>
  );
}
