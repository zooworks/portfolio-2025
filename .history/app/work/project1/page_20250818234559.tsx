// Charts
import OnlineMarketChart from "@/components/OnlineMarketChart";
import EarlyDeliveryChart from "@/components/EarlyDeliveryChart";
import SurveyChartReviewInsight1 from "@/components/SurveyChartReviewInsight1";
import SurveyChartFactor from "@/components/SurveyChartFactor";
import SurveyChartMenuDifficulty from "@/components/SurveyChartMenuDifficulty";

// Persona
import MobilePersonaCards from "@/components/MobilePersonaCards";

export default function Project1Page() {
  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        Case Study: Market Kurly UX Improvement & New Service Planning
      </h1>

      <p className="text-base text-gray-400 italic mb-6">
        I’d like to preface I have no affiliations with Kurly and this case
        study was driven by my personal interests.
      </p>

      <p className="text-lg text-gray-700 mb-4">
        Despite the title of the first attempt by expanding the early morning
        delivery, Market Kurly's own merit is disappearing. I suggest a way to
        develop Kurly while maintaining Kurly's brand direction.
      </p>

      {/* 1. Desk Research */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">1. Desk Research</h2>
        <p className="text-base text-gray-700 mb-8">
          To better understand user behavior, I conducted a two-step user
          research: an online survey followed by in-depth interviews.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-xl font-semibold text-purple-600 mb-2">
              Online grocery market still growing
            </h3>
            <OnlineMarketChart />
            <p className="text-sm text-gray-400 mt-1">
              *Source: Statistics Korea, AT Kearney (2025 projected)
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Rapid growth in the early-morning delivery market
            </h3>
            <EarlyDeliveryChart />
            <p className="text-sm text-gray-400 mt-1">
              *Source: Korea Agro-Fisheries & Food Trade Corporation, Korea
              Investment & Securities (USD estimated)
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

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-semibold text-purple-600">
                1st Survey: Online Questionnaire
              </h3>
              <a
                href="https://docs.google.com/forms/d/18WU58MozAk6FV9yGLs6bwWwaQmtwl8aBEEQg84oy8Q8/edit?ts=64802eb3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 underline"
              >
                Link
              </a>
            </div>

            <img
              src="/survey.jpg"
              alt="Online Survey Screenshot"
              className="rounded-xl shadow-md mb-4"
            />
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700">Goal:</span>{" "}
              Understand lifestyle patterns and usage behavior on the Kurly app
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700">
                Question Types:
              </span>{" "}
              Preference survey, product search, purchase & review patterns,
              meal habits
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700">Period:</span>{" "}
              2023.06.7–11 &nbsp;|&nbsp; 25 questions &nbsp;|&nbsp; 86
              respondents
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-purple-600 mb-2">
              2nd Survey: In-depth Interviews
            </h3>
            <img
              src="/interview.jpg"
              alt="Interview Screenshot"
              className="rounded-xl shadow-md mb-4"
            />
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700">Goal:</span> Extract
              needs by user segments during app usage
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700">
                Question Topics:
              </span>{" "}
              Search, review, recommendation features (combinations, dietary,
              budget)
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700">Format:</span> 18+
              questions, Zoom interviews
            </p>
          </div>
        </div>
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
              <h2 className="text-2xl font-bold mb-4 text-purple-600">
                8. Product Design
              </h2>

              <p className="text-base text-gray-600 mb-8">
                Translating wireframes into a polished, production-ready
                interface. Focus on clarity, fewer taps, and copy that nudges
                action while staying friendly.
              </p>

              {/* 공통 랩퍼: 모바일 그리드 폭 통일 */}
              <div className="mx-auto max-w-[860px] px-4">
                {/* ----------------------- Point 1 ----------------------- */}
                <section className="mt-6 md:mt-10">
                  <div className="mb-3 md:mb-6">
                    <h3 className="text-xl font-bold text-purple-600">
                      Hae-Mi’s Needs Point-1
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Personalized Meal Profile — We provide information
                      tailored to users.
                    </p>
                  </div>

                  {/* 모바일: 개별 카드 / 데스크톱: 숨김 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:hidden">
                    {[
                      "/haemi-needs-point-1.png",
                      "/haemi-needs-point-2.png",
                      "/haemi-needs-point-3.png",
                      "/haemi-needs-point-4.png",
                    ].map((src) => (
                      // 카드 비율까지 동일하게 맞추고 싶으면 아래 div에 aspect-[4/3] 추가
                      <div
                        key={src}
                        className="w-full overflow-hidden rounded-xl"
                      >
                        <img
                          src={src}
                          alt="Hae-Mi’s Needs Point-1 screen"
                          className="w-full h-auto object-contain"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>

                  {/* 데스크톱: 합본 이미지 한 장 */}
                  <div className="hidden lg:block">
                    <img
                      src="/haemi-needs-point-web.png"
                      alt="Hae-Mi’s Needs Point-1 combined screens"
                      className="w-full rounded-xl"
                    />
                  </div>
                </section>

                {/* ----------------------- Point 2 ----------------------- */}
                <section className="mt-6 md:mt-10">
                  <div className="mb-3 md:mb-6">
                    <h3 className="text-xl font-bold text-purple-600">
                      Hae-Mi’s Needs Point-2
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Kurly Meal Plan — Weekly meal categories tailored for you.
                    </p>
                  </div>

                  <p className="text-base text-gray-400 mt-3">
                    *All product design screens are based on survey insights and
                    persona goals.
                  </p>

                  {/* 데스크톱: 합본 이미지 */}
                  <div className="hidden lg:block mt-4">
                    <img
                      src="/haemi-needs-point2-web.png"
                      alt="Hae-Mi’s Needs Point-2 combined screens"
                      className="w-full rounded-xl"
                    />
                  </div>

                  {/* 모바일: 개별 카드 / 데스크톱: 숨김 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:hidden mt-4">
                    {["/haemi-needs-point2-web.png"].map((src) => (
                      // 카드 비율을 강제하려면 className에 aspect-[4/3] 추가 가능
                      <div
                        key={src}
                        className="w-full overflow-hidden rounded-xl"
                      >
                        <img
                          src={src}
                          alt="Hae-Mi’s Needs Point-2 screen"
                          className="w-full h-auto object-contain"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
}
