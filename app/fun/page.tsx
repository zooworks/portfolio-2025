"use client";
import { useEffect, useRef, useState } from "react";

/* ========== 타입 ========== */
type Media =
  | { type: "image"; src: string }
  | { type: "video"; src: string; poster?: string };

type Project = {
  title: string;
  period?: string;
  gallery: Media[]; // 이 프로젝트의 관련 미디어(이미지/영상)들
  coverIndex?: number; // 카드에 보일 커버 미디어 인덱스 (없으면 0)
};

/* ========== 데이터 (예시) ========== */
/* 필요에 맞게 gallery 배열만 추가/수정하면 라이트박스가 그 안에서만 슬라이드돼 */
const PROJECTS: Project[] = [
  {
    title: "Airforce1 Graphic Album Project",
    period: "2023.01 – 2023.03",
    gallery: [
      { type: "image", src: "/fun1.jpg" }, // 커버
      { type: "image", src: "/images/af1_detail1.jpg" },
      { type: "image", src: "/images/af1_detail2.jpg" },
      // { type: "video", src: "/videos/af1_process.mp4", poster: "/images/af1_poster.jpg" },
    ],
  },
  {
    title: "Airforce1 Graphic Album Project",
    period: "2023.01 – 2023.03",
    coverIndex: 0,
    gallery: [
      // 두번째 프로젝트: 비디오를 커버로 사용
      {
        type: "video",
        src: "/project2.mp4",
        poster: "/images/project2_poster.jpg",
      }, // 커버
      { type: "image", src: "/images/p2_still1.jpg" },
      { type: "image", src: "/images/p2_still2.jpg" },
    ],
  },
];

/* ========== 페이지 컴포넌트 ========== */
export default function Fun() {
  const [open, setOpen] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);
  const [mediaIndex, setMediaIndex] = useState(0);

  // 라이트박스 열릴 때 배경 스크롤 잠금
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

/* ========== 카드: 이미지/비디오 커버 공용 ========== */
function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const cover = project.gallery[project.coverIndex ?? 0];
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // 화면 벗어나면 자동 일시정지 (비디오일 때)
  useEffect(() => {
    if (cover.type !== "video" || !videoRef.current) return;
    const el = videoRef.current;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) el.pause();
        }),
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [cover]);

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative overflow-hidden rounded-2xl focus:outline-none bg-black"
      aria-label={`Open ${project.title}`}
    >
      {/* 커버 미디어 */}
      {cover.type === "image" ? (
        <img
          src={cover.src}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          draggable={false}
        />
      ) : (
        <video
          ref={videoRef}
          className="
            w-full h-full object-cover
            object-[46%_center]   /* 살짝 오른쪽 포커스 */
            transition-transform duration-300 group-hover:scale-[1.03]
          "
          src={cover.src}
          poster={cover.poster}
          muted
          playsInline
          autoPlay
          loop
          preload="metadata"
        />
      )}

      {/* 하단 그라디언트 + 왼쪽 정렬 텍스트 */}
      <div
        className="
          pointer-events-none absolute inset-x-0 bottom-0
          bg-gradient-to-t from-black/80 via-black/50 to-transparent
          px-5 py-4 text-left
          opacity-95 group-hover:opacity-100 transition-opacity
        "
      >
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

/* ========== 라이트박스: 프로젝트 안의 갤러리만 슬라이드 ========== */
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

  // 키보드 이동/닫기
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mediaIndex, total]);

  const media = project.gallery[mediaIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      {/* 닫기 / 이전 / 다음 */}
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

      {/* 콘텐츠 */}
      <div
        className="flex flex-col items-start gap-3 text-left"
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
            className="block max-w-[92vw] max-h-[86vh] object-contain rounded-lg shadow-2xl"
            draggable={false}
          />
        ) : (
          <video
            className="block max-w-[92vw] max-h-[86vh] object-contain rounded-lg shadow-2xl bg-black"
            src={media.src}
            poster={media.poster}
            controls
            autoPlay
            muted
            playsInline
            loop
          />
        )}

        {/* 하단 정보 (왼쪽 정렬) */}
        <div className="pl-1">
          <p className="text-white text-sm md:text-base font-semibold">
            {project.title}
          </p>
          {project.period && (
            <p className="text-white/80 text-xs mt-0.5">/ {project.period}</p>
          )}
        </div>
      </div>
    </div>
  );
}
