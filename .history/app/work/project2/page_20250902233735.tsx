// Charts
import SurveyChartReviewInsight1 from "@/components/SurveyChartReviewInsight1";
import SurveyChartFactor from "@/components/SurveyChartFactor";
import SurveyChartMenuDifficulty from "@/components/SurveyChartMenuDifficulty";
import NFTCharts from "@/components/NFTCharts"; // ✅ 추가

// Persona
import MobilePersonaCards from "@/components/MobilePersonaCards";

export default function Project1Page() {
  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        Snap Cash - Instant NFT Minting Camera Solution
      </h1>

      <p className="text-lg text-gray-700 mb-4">
        Research Insights: NFT Awareness and Potential
      </p>

      <section className="bg-gray-100 rounded-lg p-6 mt-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
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
            <p className="text-base text-gray-800">
              May – July 2023 (3 Months)
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-bold uppercase text-gray-600 mb-2">
              Team
            </h3>
            <p className="text-base text-gray-800">
              1 Product Designer <br />1 backend Dev <br />
              1 Product Manager <br />1 Frontend Dev
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-bold uppercase text-gray-600 mb-2">
              Tools
            </h3>
            <p className="text-base text-gray-800">
              Figma <br />
              Adobe Illustrator <br />
              Adobe Photoshop <br />
            </p>
          </div>

          {/* Contribution: 제목 + 본문 같은 셀에 넣기 */}
          <div className="md:col-span-12 flex flex-col md:grid md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
              <h3 className="text-sm font-bold uppercase text-gray-600 mb-2">
                Contribution
              </h3>
            </div>
            <div className="text-base text-gray-800 md:col-span-9 max-w-none">
              <p>
                As a product design lead, I successfully led the design of a
                B2C-focused fintech/health app into a user-friendly platform by:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2">
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
        </div>
      </section>

      <section className="mt-16 ">
        <h2 className="text-2xl font-bold mb-4">1. Project Background</h2>
        <p className="text-base text-gray-700 mb-20">
          The NFT market has been rapidly expanding, but mainstream adoption
          remains limited due to high entry barriers. For general users,
          technical terminology such as{" "}
          <span className="font-semibold">Decentralization</span> and
          <span className="font-semibold"> Smart contracts</span> is difficult
          to understand. On top of that, the NFT minting process is often
          complex and confusing, with unfriendly user experiences. As a result,
          the widespread adoption of NFTs has been significantly delayed.
        </p>

        {/* 두 원: 모바일은 세로 겹침, 데스크탑은 가로 겹침 */}
        <div className="mt-10 flex flex-col items-center md:flex-row md:justify-center md:gap-8">
          {/* 공통 사이즈: 둘 다 동일하게 */}
          {/* Circle 1 */}
          <div
            className="w-64 h-64 md:w-72 md:h-72 rounded-full border-2 border-gray-300
                    flex flex-col items-center justify-center text-center bg-white px-4"
          >
            <h3 className="font-bold text-lg mb-1">Terminology</h3>
            <p className="text-sm text-gray-500 leading-tight">
              Hard-to-grasp concepts like{" "}
              <span className="font-semibold">Decentralization</span> and{" "}
              <span className="font-semibold">Smart contracts</span>
            </p>
          </div>

          {/* Circle 2 */}
          <div
            className="w-64 h-64 md:w-72 md:h-72 rounded-full border-2 border-gray-300
                    flex flex-col items-center justify-center text-center px-6
                    -mt-10 md:mt-0 md:-ml-12"
          >
            <h3 className="font-bold text-lg mb-1">Usability</h3>
            <p className="text-sm text-gray-500 leading-tight">
              Complex and confusing minting process & UX
            </p>
          </div>
        </div>

        {/* 화살표 + 결과 */}
        <div className="flex justify-center my-6">
          <svg className="w-5 h-5 text-sky-500" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 4v14m0 0l-5-5m5 5l5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="rounded-2xl bg-[#6736FF] text-white text-center px-6 py-4 font-semibold shadow-sm max-w-3xl mx-auto mb-24">
          Delayed mass adoption of NFTs
        </div>
      </section>

      {/* 2. Desk Research */}

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4 ">2. Desk Research</h2>
        <p className="text-base text-gray-700 mb-8">
          A 2023 survey by Statista revealed that 45% of respondents aged 18-35
          had heard of NFTs, compared to only 20% who understood blockchain
          technology. NFTs can drive blockchain adoption by using familiar
          reward systems like NFT CAM to make it accessible and engaging.
        </p>
        <NFTCharts />
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-6">3. Why NFTCAM?</h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Problem */}
          <div className="w-52 h-52 rounded-full border-4 border-red-400 flex flex-col justify-center items-center p-4">
            <h3 className="font-bold text-red-500">Problem</h3>
            <p className="text-xs text-gray-600 mt-2">
              Complex concepts <br /> & unfriendly UX
            </p>
          </div>

          {/* Arrow */}
          <span className="hidden md:block text-3xl">➡️</span>

          {/* Insight */}
          <div className="w-52 h-52 rounded-full border-4 border-purple-400 flex flex-col justify-center items-center p-4">
            <h3 className="font-bold text-purple-600">Insight</h3>
            <p className="text-xs text-gray-600 mt-2">
              45% know NFTs, <br /> only 20% know blockchain
            </p>
          </div>

          {/* Arrow */}
          <span className="hidden md:block text-3xl">➡️</span>

          {/* Solution */}
          <div className="w-52 h-52 rounded-full border-4 border-green-400 flex flex-col justify-center items-center p-4">
            <h3 className="font-bold text-green-600">Solution</h3>
            <p className="text-xs text-gray-600 mt-2">
              NFTCAM simplifies minting <br /> & adds gamification
            </p>
          </div>
        </div>
      </section>

      {/* 2. User Research */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4">2. User Research</h2>
        <p className="text-base text-gray-700 mb-8">
          To better understand user behavior, I conducted a two-step user
          research: an online survey followed by in-depth interviews.
        </p>
      </section>

      {/* 3. Survey Results */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4">3. Survey Results</h2>

        {/* Insight 1 */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-purple-600 mb-1">
            Insight 1.
          </h3>
          <p className="text-base text-gray-800 font-medium mb-4">
            Users value reviews, but{" "}
            <span className="font-bold">rarely write them themselves.</span>
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-gray-700 mb-2">
                Q1. Have you ever{" "}
                <span className="text-purple-600">
                  written a product review
                </span>{" "}
                after receiving a purchase?
              </p>
              <SurveyChartReviewInsight1 />
            </div>

            <div>
              <p className="text-sm text-gray-700 mb-2">
                Q6. What do you{" "}
                <span className="text-purple-600">consider most important</span>{" "}
                when making a purchase decision?
              </p>
              <SurveyChartFactor />
            </div>
          </div>
        </div>

        {/* Insight 2 */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-purple-600 mb-1">
            Insight 2.
          </h3>
          <p className="text-base text-gray-800 font-medium mb-4">
            A large portion of users{" "}
            <span className="font-bold">
              struggle to decide on their meals.
            </span>
          </p>
          <div className="w-full max-w-2xl mx-auto">
            <SurveyChartMenuDifficulty />
          </div>
        </div>
      </section>

      {/* 4. User Persona */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4 text-purple-600">
          4. User Persona
        </h2>
        <p className="text-base text-gray-600 mb-8">
          Based on the research, I created user personas to represent key
          segments and their goals, frustrations, and motivations.
        </p>
        <MobilePersonaCards />
      </section>

      {/* 5. UX Strategy & Information Architecture */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4 text-purple-600">
          5. UX Strategy & Information Architecture
        </h2>
        <p className="text-base text-gray-600 mb-4">
          Visualizing the core UX strategy: identifying problems, defining
          goals, and outlining design & functional solutions.
        </p>

        {/* Problem Label */}
        <div className="flex justify-center mt-4 mb-8">
          <div className="px-6 sm:px-8 py-2 bg-purple-600 text-white font-semibold rounded-full text-center w-fit mx-auto">
            PROBLEM
          </div>
        </div>

        {/* Problem Circles */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:overflow-visible">
          {[
            "Lack of clear differentiation from other e-commerce platforms",
            "Steadily declining market presence of Kurly",
            "Unintuitive reviews",
          ].map((text, idx) => (
            <div key={idx} className="w-full sm:w-auto">
              {/* ✅ 웹: 기존 원형 유지 */}
              <div
                className="hidden sm:flex items-center justify-center rounded-full border border-gray-300 
        text-center text-gray-700 p-4 w-40 h-40 sm:w-48 sm:h-48 text-sm sm:text-base flex-shrink-0"
              >
                {text}
              </div>

              {/* ✅ 모바일: 가로 긴 직사각형 */}
              <div
                className="sm:hidden w-full text-center text-gray-700 text-base font-medium 
        border border-gray-200 rounded-xl py-6 px-8 mb-0"
              >
                ⚡ {text}
              </div>
            </div>
          ))}
        </div>

        {/* Arrow */}
        <div className="flex justify-center my-4">
          <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-l-transparent border-r-transparent border-t-[20px] border-t-purple-400"></div>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6 max-w-2xl mx-auto">
          {[
            {
              title: "GOAL",
              lines: [
                "“Lifestyle Curation”",
                "Curating culinary experiences that define the user’s [Dining] Style.",
              ],
            },
            {
              title: "UX DESIGN",
              lines: [
                "Data-driven recommendation features that build trust.",
                "Improved usability to increase participation.",
              ],
            },
            {
              title: "FUNCTION",
              lines: [
                "Reduce unnecessary icons and add friendly dining recommendation icons.",
                "Reviews designed to be easy to scan at a glance.",
              ],
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 border border-gray-200 rounded-xl p-6 bg-white h-40"
            >
              <div className="flex items-center justify-center border-2 border-purple-500 text-purple-500 font-bold rounded-full aspect-square w-32 h-32 flex-shrink-0">
                {card.title}
              </div>
              <div className="flex-1 text-gray-600">
                {card.lines.map((line, lineIdx) => (
                  <p
                    key={lineIdx}
                    className={
                      lineIdx === 0 ? "font-semibold text-gray-800 mb-1" : ""
                    }
                  >
                    - {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 6. Information Architecture */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">
            6. Information Architecture
          </h2>
          <p className="text-base text-gray-600 mb-8">
            Leveraging research-driven insights, this IA builds upon Market
            Kurly’s existing architecture, reflecting findings from survey
            results and user persona analysis.
          </p>

          <div className="flex justify-center">
            <img
              src="/IA.jpg"
              alt="Information Architecture Diagram"
              className="rounded-xl shadow-md max-w-full"
            />
          </div>

          <p className="text-sm text-gray-400 text-center mt-2">
            *IA Diagram for Market Kurly UX Renewal
          </p>

          {/* 7. Wire Frames (INLINE LIST) */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-4 text-purple-600">
              7. Wire Frames
            </h2>
            <p className="text-base text-gray-600 mb-8">
              Low-fidelity screens exploring the flow from review creation to
              personalized meal curation. Each prototype iterates on navigation,
              copy, and data entry effort.
            </p>

            <div className="space-y-6">
              {/* Prototype 1 */}
              <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
                <div className="p-4 sm:p-5">
                  <h3 className="font-semibold text-gray-900">Prototype 1</h3>
                  <p className="text-sm text-gray-600">
                    Baseline flow. Simple entry points and default review
                    prompts.
                  </p>
                </div>
                <img
                  src="/prototype2.png"
                  alt="Prototype 1 wireframe"
                  loading="lazy"
                  className="w-full h-auto" // ← max-h 제거, object-contain 제거
                />
              </div>

              {/* Prototype 2 */}
              <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
                <div className="p-4 sm:p-5">
                  <h3 className="font-semibold text-gray-900">Prototype 2</h3>
                  <p className="text-sm text-gray-600">
                    Reduces taps; clearer labels; quicker allergy & taste
                    inputs.
                  </p>
                </div>
                <img
                  src="/prototype1.png"
                  alt="Prototype 2 wireframe"
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>

              {/* Prototype 3 */}
              <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
                <div className="p-4 sm:p-5">
                  <h3 className="font-semibold text-gray-900">Prototype 3</h3>
                  <p className="text-sm text-gray-600">
                    Final pass. Clear hierarchy + microcopy aligned to survey
                    insights.
                  </p>
                </div>
                <img
                  src="/prototype3.png"
                  alt="Prototype 3 wireframe"
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
            </div>
            {/* 8. Product Design */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-4 text-purple-600 text-left">
                8. Product Design
              </h2>

              <p className="text-base text-gray-600 mb-8 text-left max-w-3xl">
                Translating wireframes into a polished, production-ready
                interface. Focus on clarity, fewer taps, and copy that nudges
                action while staying friendly.
              </p>

              {/* 공통 랩퍼: 중앙정렬 대신 좌측정렬 */}
              <div className="max-w-[1200px] px-4">
                {/* ----------------------- Point 1 ----------------------- */}
                <section className="mt-6 md:mt-10">
                  <div className="mb-3 md:mb-6 text-left">
                    <h3 className="text-xl font-bold text-purple-600">
                      Hae-Mi’s Needs Point-1
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Personalized Meal Profile — We provide information
                      tailored to users.
                    </p>
                  </div>

                  {/* 모바일 */}
                  <div className="md:hidden mt-1">
                    <div className="w-full max-w-[600px] mx-auto rounded-xl overflow-hidden">
                      <img
                        src="/haemi-needs-point-mob.png"
                        alt="Hae-Mi’s Needs Point-1 (mobile)"
                        className="w-full h-auto object-contain rounded-xl"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* 데스크톱 */}
                  <div className="hidden md:block">
                    <img
                      src="/haemi-needs-point-web.png"
                      alt="Hae-Mi’s Needs Point-1 (desktop combined)"
                      className="w-full max-w-[1100px] mx-auto rounded-xl"
                    />
                  </div>
                </section>

                {/* ----------------------- Point 2 ----------------------- */}
                <section className="mt-6 md:mt-10">
                  <div className="mb-3 md:mb-6 text-left">
                    <h3 className="text-xl font-bold text-purple-600">
                      Hae-Mi’s Needs Point-2
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Kurly Meal Plan — Weekly meal categories tailored for you.
                    </p>
                  </div>

                  {/* 모바일 */}
                  <div className="md:hidden mt-10">
                    <div className="w-full max-w-[600px] mx-auto rounded-xl overflow-hidden">
                      <img
                        src="/haemi-needs-point2-mob.png"
                        alt="Hae-Mi’s Needs Point-2 (mobile)"
                        className="w-full h-auto object-contain rounded-xl"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* 데스크톱 */}
                  <div className="hidden md:block mt-4">
                    <img
                      src="/haemi-needs-point2-web.png"
                      alt="Hae-Mi’s Needs Point-2 (desktop combined)"
                      className="w-full max-w-[1000px] rounded-xl object-contain"
                    />
                  </div>
                </section>

                {/* ----------------------- Point 3 ----------------------- */}
                <section className="mt-6 md:mt-10">
                  <div className="mb-3 md:mb-6 text-left">
                    <h3 className="text-xl font-bold text-purple-600">
                      Yeon-hee’s Needs Point
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      One-Touch Review — Earn more by writing detailed reviews.
                    </p>
                  </div>

                  {/* 모바일 */}
                  <div className="md:hidden mt-4 flex justify-center">
                    <div className="w-full max-w-[600px] mx-auto rounded-xl overflow-hidden">
                      <img
                        src="/yeon-hees-needs-point-mob.png"
                        alt="Yeon-hee’s Needs Point (mobile)"
                        className="w-[68%] mx-auto h-auto object-contain rounded-xl"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* 데스크톱 */}
                  <div className="hidden md:block mt-4">
                    <img
                      src="/yeon-hees-needs-point-web.png"
                      alt="Hae-Mi’s Needs Point-2 (desktop combined)"
                      className="w-full max-w-[1000px] rounded-xl"
                    />
                  </div>

                  <p className="text-base text-gray-400 mt-3">
                    *All product design screens are based on survey insights and
                    persona goals.
                  </p>
                </section>
              </div>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
}
