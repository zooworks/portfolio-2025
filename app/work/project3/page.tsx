export default function Project3Page() {
  const images = Array.from(
    { length: 9 },
    (_, i) => `/HUMAN_With_ai${i + 1}.jpg`
  );

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      {/* ------------------ HEADER SECTION ------------------ */}
      <h1 className="text-4xl font-bold mb-4">
        HUMAN With AI – Exploring Anthropomorphic Interfaces
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Research Insights: Effects of AI Anthropomorphism on Learning Experience
      </p>

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
              1 Researcher <br />
              1 Designer <br />2 Developers
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
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>
                Designed and tested four AI interface types (text, animal,
                avatar, real human).
              </li>
              <li>
                Conducted quantitative and qualitative analysis on user
                responses.
              </li>
              <li>
                Created adaptive UI prototypes reflecting research insights.
              </li>
            </ul>
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
