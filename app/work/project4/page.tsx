export default function Project1Page() {
  const images = Array.from({ length: 10 }, (_, i) => `/codee_${i + 1}.jpg`);

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      {/* HEADER */}
      <h1 className="text-4xl font-bold mb-6">
        Codee – Coding Test Practice App for Job Seekers
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Research Insights: Adaptive Learning Feedback & Engagement
      </p>

      {/* IMPACT */}
      <section className="mt-4 mb-4 md:mb-6">
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">
            Impact
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-3 text-base leading-relaxed">
            <li>
              Introduced an{" "}
              <span className="font-semibold">adaptive feedback system</span>{" "}
              that reduced early-stage dropout by
              <span className="font-semibold"> 15%</span> and increased average
              session duration.
            </li>
            <li>
              Implemented{" "}
              <span className="font-semibold">
                level-adjusted feedback and reward structures
              </span>{" "}
              that strengthened learners’ sense of progress and improved mission
              completion rates by
              <span className="font-semibold"> 20%</span>.
            </li>
            <li>
              Enhanced motivation and weekly re-engagement through optimized
              reward timing and gamification loops, contributing to a{" "}
              <span className="font-semibold">double-digit increase</span> in
              return activity.
            </li>
          </ul>
        </div>
      </section>

      {/* ------------------ INFO SECTION ------------------ */}
      <section className="bg-gray-100 rounded-lg p-6 mt-1 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          {/* Role */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold uppercase text-gray-600 mb-2">
              Role
            </h3>
            <p className="text-base text-gray-800">Product Designer</p>
          </div>

          {/* Timeline */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold uppercase text-gray-600 mb-2">
              Timeline
            </h3>
            <p className="text-base text-gray-800">Feb – Apr 2024 (2 Months)</p>
          </div>

          {/* Team */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold uppercase text-gray-600 mb-2">
              Team
            </h3>
            <p className="text-base text-gray-800 leading-relaxed">
              1 Product Designer <br />
              1 Backend Dev <br />
              1 Product Manager <br />1 Frontend Dev
            </p>
          </div>

          {/* Tools */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold uppercase text-gray-600 mb-2">
              Tools
            </h3>
            <p className="text-base text-gray-800 leading-relaxed">
              Figma <br />
              Adobe Illustrator <br />
              Adobe Photoshop <br />
              Procreate
            </p>
          </div>

          {/* Contribution */}
          <div className="md:col-span-12 mt-6">
            <h3 className="text-sm font-bold uppercase text-gray-600 mb-2">
              Contribution
            </h3>
            <p className="text-base text-gray-800 mb-3">
              As the product designer, I led the end-to-end UX of an adaptive
              learning and coding-practice app by:
            </p>

            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>
                Designing reward and task flows focused on reducing cognitive
                burden and supporting repeated practice.
              </li>
              <li>
                Conducting user interviews and analyzing behavioral patterns to
                optimize feedback timing and difficulty scaling.
              </li>
              <li>
                Building a lightweight design system and interaction patterns
                suitable for rapid iteration across iOS/Android.
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
            alt={`Codee image ${index + 1}`}
            className="w-full h-auto border-gray-200 rounded-lg"
          />
        ))}
      </section>

      {/* Footer spacing */}
      <div className="h-24" />
    </div>
  );
}
