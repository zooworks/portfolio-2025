// components/Resume.tsx
"use client";

type EduItem = {
  start: string;
  end: string;
  school: string;
  city: string;
  country: string;
  degree: string;
  dept?: string;
};

const education: EduItem[] = [
  {
    start: "Mar. 2022",
    end: "Aug. 2025",
    school: "Hongik University",
    city: "Seoul",
    country: "South Korea",
    degree: "Master of Arts in Interaction Design",
  },
  {
    start: "Mar. 2018",
    end: "Feb. 2020",
    school: "Yeungnam University",
    city: "Gyeongsan",
    country: "South Korea",
    degree: "Bachelor of Fine Arts in Visual Communication Design",
  },
];

type ExpItem = {
  start: string;
  end: string;
  company: string;
  location?: string;
  role: string;
  link?: string;
};

const experience: ExpItem[] = [
  {
    start: "Apr. 2024",
    end: "May 2025",
    company: "Starzip",
    location: "Seoul, South Korea",
    role: "Freelance UX/UI Designer",
  },
  {
    start: "Mar. 2024",
    end: "Apr. 2025",
    company: "Blockwave Labs Co., Ltd.",
    location: "Seoul, South Korea",
    role: "Product Designer (UX/UI, Interaction)",
  },
  {
    start: "Dec. 2023",
    end: "Jan. 2024",
    company: "Maxerve Co., Ltd.",
    location: "Seoul, South Korea",
    role: "Freelance UX Designer",
  },
  {
    start: "Jan. 2023",
    end: "Mar. 2023",
    company: "Rimomed Co., Ltd.",
    location: "Seoul, South Korea",
    role: "Contract UX/UI Designer",
  },
  {
    start: "Dec. 2021",
    end: "May 2022",
    company: "Hanbando No. 2",
    location: "Daegu, South Korea",
    role: "Designer (2D/Digital, CI, Signage)",
  },
];

export default function Resume() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left: Title / Button */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-10">Resume</h2>
          <a
            href="/Kimjoosung_CV.pdf"
            download="Joosung_Kim_Resume.pdf" // ✅ 클릭 시 다운로드 이름 지정
            className="inline-block rounded-xl border border-gray-800 px-6 py-3 text-base font-medium hover:bg-gray-900 hover:text-white transition"
          >
            PDF Download
          </a>
        </div>

        {/* Right: Education Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold">Education</h3>

          <dl className="mt-10 space-y-12">
            {education.map((edu, i) => (
              <div key={i} className="grid grid-cols-[1fr_2fr] gap-8">
                <dt className="text-gray-600 whitespace-nowrap">
                  {edu.start} – {edu.end}
                </dt>
                <dd>
                  <p className="font-semibold">
                    {edu.school}
                    <span className="font-normal text-gray-700">
                      , {edu.city}, {edu.country}
                    </span>
                  </p>
                  <p className="italic">{edu.degree}</p>
                  {edu.dept && <p className="text-gray-800">{edu.dept}</p>}
                </dd>
              </div>
            ))}
          </dl>

          {/* Section title */}
          <h3 className="text-2xl md:text-3xl font-semibold mt-20">
            <span className=" px-2 -mx-2 rounded">Professional Experience</span>
          </h3>

          <dl className="mt-10 space-y-16">
            {experience.map((job, i) => (
              <div key={i} className="grid grid-cols-[1fr_2fr] gap-8">
                {/* Dates */}
                <dt className="text-gray-600 whitespace-nowrap">
                  {job.start} – {job.end}
                </dt>

                {/* Company / Location / Role */}
                <dd className="leading-tight text-gray-800">
                  {job.link ? (
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold no-underline hover:underline hover:text-gray-900 transition"
                    >
                      {job.company}
                    </a>
                  ) : (
                    <span className="font-semibold">{job.company}</span>
                  )}

                  {job.location && (
                    <span className="font-normal text-gray-700">
                      , {job.location}
                    </span>
                  )}

                  {job.role && (
                    <span className="font-normal">, {job.role}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-16 h-px w-full bg-gray-300" />
        </div>
      </div>
    </section>
  );
}
