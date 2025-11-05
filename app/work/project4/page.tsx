export default function Project1Page() {
  const images = Array.from({ length: 10 }, (_, i) => `/codee_${i + 1}.jpg`);

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      {/* ------------------ HEADER SECTION ------------------ */}
      <h1 className="text-4xl font-bold mb-4">
        Codee – Coding Test Practice App for Job Seekers
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Research Insights: NFT Awareness and Potential
      </p>

      <section className="bg-gray-50 rounded-lg p-6 mb-14 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold uppercase text-gray-600 mb-2">
              Role
            </h3>
            <p className="text-base text-gray-800">Product Designer</p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-bold uppercase text-gray-600 mb-2">
              Timeline
            </h3>
            <p className="text-base text-gray-800">Feb – Apr 2024 (2 Months)</p>
          </div>

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
              As a product design lead, I successfully led the design of a
              B2C-focused fintech/health app into a user-friendly platform by:
            </p>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>
                Managed the design domain from native app (Android, iOS) to
                responsive web.
              </li>
              <li>
                <span className="font-semibold">Led communication</span> with
                developers based on component guide documentation.
              </li>
              <li>
                <span className="font-semibold">
                  Creating a new design system
                </span>{" "}
                that improved usability.
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
            className="w-full h-auto border-gray-200"
          />
        ))}
      </section>

      {/* Footer spacing */}
      <div className="h-24" />
    </div>
  );
}
