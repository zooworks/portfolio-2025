import OnlineMarketChart from "@/components/OnlineMarketChart";
import EarlyDeliveryChart from "@/components/EarlyDeliveryChart";
import SurveyChartReview from "@/components/SurveyChartReview";
import SurveyChartFactor from "@/components/SurveyChartFactor";
import SurveyChartMenuDifficulty from "@/components/SurveyChartMenuDifficulty";
import SurveyChartReviewInsight1 from "@/components/SurveyChartReviewInsight1";
import UserPersona from "@/components/UserPersona";

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

          {/* 나란히 배치하는 구간 */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Q1 Block */}
            <div>
              <p className="text-sm text-gray-700 mb-2">
                Q1. Have you ever{" "}
                <span className="text-purple-600">
                  written a product review
                </span>{" "}
                after receiving a purchase?
              </p>
              <div className="w-full">
                <SurveyChartReviewInsight1 />
              </div>
            </div>

            {/* Q6 Block */}
            <div>
              <p className="text-sm text-gray-700 mb-2">
                Q6. What do you{" "}
                <span className="text-purple-600">consider most important</span>{" "}
                when making a purchase decision?
              </p>
              <div className="w-full">
                <SurveyChartFactor />
              </div>
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

        {/* --- User Persona Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">
            4. User Persona
          </h2>
          <p className="text-base text-gray-600 mb-8">
            Based on the research, I created user personas to represent key
            segments and their goals, frustrations, and motivations.
          </p>

          {/* Persona 1 */}
          <div className="flex flex-col items-center mb-12">
            <img
              src="/Persona1.jpg"
              alt="User Persona - Go Yeon-hee"
              className="mb-4 w-full"
            />
          </div>

          {/* Persona 2 */}
          <div className="flex flex-col items-center">
            <img
              src="/Persona2.jpg"
              alt="User Persona - Ha Joon"
              className="mb-4 w-full"
            />
          </div>
        </div>

        {/* --- UX Strategy & Information Architecture Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">
            5. UX Strategy & Information Architecture
          </h2>
          <p className="text-base text-gray-600 mb-8">
            This section outlines the UX strategy and information architecture,
            from identifying key problems to defining goals, UX principles, and
            the structural flow of the service.
          </p>

          {/* UX Strategy Image */}
          <div className="flex flex-col items-center mb-12">
            <img
              src="/UX_Strategy.jpg"
              alt="UX Strategy Overview"
              className="mb-4 w-full"
            />
          </div>

          {/* Information Architecture Image */}
          <div className="flex flex-col items-center">
            <img
              src="/Information_Architecture.jpg"
              alt="Information Architecture"
              className="mb-4 w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
