export default function Project3Page() {
  const images = Array.from(
    { length: 9 },
    (_, i) => `/HUMAN_With_ai${i + 1}.jpg`
  );

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      {/* HEADER */}
      <h1 className="text-4xl font-bold mb-6">
        HUMAN With AI – Exploring Anthropomorphic Interfaces
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Research Insights: Effects of AI Anthropomorphism on Learning Experience
      </p>

      {/* IMPACT */}
      <section className="mt-4 mb-4 md:mb-6">
        <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-indigo-700 mb-4">
            Impact
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-3 text-base leading-relaxed">
            <li>
              Demonstrated that{" "}
              <span className="font-semibold">
                AI interface types affect immersion, cognitive load, and
                satisfaction differently depending on learner proficiency
              </span>
              , providing empirical evidence for adaptive AI learning design.
            </li>
            <li>
              Identified a clear{" "}
              <span className="font-semibold">
                trade-off in human-like AI interfaces
              </span>
              — offering higher immersion and satisfaction but also increasing
              psychological burden, especially for low-proficiency learners.
            </li>
            <li>
              Revealed that{" "}
              <span className="font-semibold">
                simplified, low-burden interfaces are more effective for
                beginner learners
              </span>
              , providing actionable UX insights for personalized AI education
              platforms.
            </li>
          </ul>
        </div>
      </section>

      {/* ------------------ INFO / ROLE SECTION ------------------ */}
      <section className="bg-gray-50 rounded-lg p-6 mb-14 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Role */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold uppercase text-gray-600 mb-2">
              Role
            </h3>
            <p className="text-base text-gray-800">
              UX Researcher / Product Designer
            </p>
          </div>

          {/* Timeline */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold uppercase text-gray-600 mb-2">
              Timeline
            </h3>
            <p className="text-base text-gray-800">May – Aug 2024 (3 Months)</p>
          </div>

          {/* Team */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold uppercase text-gray-600 mb-2">
              Team
            </h3>
            <p className="text-base text-gray-800 leading-relaxed">
              1 Researcher
            </p>
          </div>

          {/* Tools */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold uppercase text-gray-600 mb-2">
              Tools
            </h3>
            <p className="text-base text-gray-800 leading-relaxed">
              Figma <br />
              Illustrator <br />
              Photoshop <br />
              SPSS / Excel
            </p>
          </div>

          {/* Contribution */}
          <div className="md:col-span-12 mt-6">
            <h3 className="text-sm font-bold uppercase text-gray-600 mb-2">
              Contribution
            </h3>
            <p className="text-base text-gray-800 mb-3">
              Led research and design on AI-driven conversation prototypes,
              focusing on user immersion, cognitive load, and learning
              satisfaction across different levels of anthropomorphism.
            </p>
            <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
              <li>
                Designed and tested four AI interface types (text, animal,
                avatar, human-like).
              </li>
              <li>
                Conducted quantitative + qualitative analysis with 100 learners.
              </li>
              <li>
                Created adaptive UI prototypes reflecting level-based insights.
              </li>
            </ul>

            {/* 논문 링크 */}
            <div className="text-center">
              <a
                href="https://www.riss.kr/search/detail/DetailView.do?p_mat_type=be54d9b8bc7cdb09&control_no=0006dd64440d82d2ffe0bdc3ef48d419"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                View Full Research Paper ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ IMAGE SECTION ------------------ */}
      <section className="space-y-10">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Human AI image ${index + 1}`}
            className="w-full h-auto border-gray-200 rounded-lg"
          />
        ))}
      </section>

      {/* Footer spacing */}
      <div className="h-24" />
    </div>
  );
}
