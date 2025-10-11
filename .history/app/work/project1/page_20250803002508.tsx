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
    <div className="px-6 py-10 max-w-4xl mx-auto">
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

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-xl font-semibold text-purple-600 mb-2">
              The online grocery market still holds growth potential
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
        <p className="text-base text-gray-600 mb-8">
          Visualizing the core UX strategy: identifying problems, defining
          goals, and outlining design & functional solutions.
        </p>

        {/* Problem Label */}
        <div className="flex justify-center mt-4">
          <div className="px-70 py-2  bg-purple-600 text-white font-semibold rounded-full">
            PROBLEM
          </div>
        </div>

        {/* Problem Circles */}
        <div className="flex flex-row justify-center items-center gap-6 flex-wrap">
          {[
            "Lack of clear differentiation from other e-commerce platforms",
            "Steadily declining market presence of Kurly",
            "Unintuitive reviews",
          ].map((text, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center w-48 h-48 rounded-full border border-gray-300 text-center text-gray-700 p-4"
            >
              {text}
            </div>
          ))}
        </div>

        {/* Arrow */}
        <div className="flex justify-center my-4">
          <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-l-transparent border-r-transparent border-t-[20px] border-t-purple-400"></div>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
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
              className="flex items-center gap-4 border border-gray-200 rounded-xl p-6 bg-white shadow h-40"
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
      </section>
    </div>
  );
}
