// Charts
import SurveyChartReviewInsight1 from "@/components/SurveyChartReviewInsight1";
import SurveyChartFactor from "@/components/SurveyChartFactor";
import SurveyChartMenuDifficulty from "@/components/SurveyChartMenuDifficulty";
import ClientInlineNFTCharts from "./ClientInlineNFTCharts";

// Persona
import MobilePersonaCards from "@/components/MobilePersonaCards";

// replace old IconSquares
const IconSquares = ({
  size = 16,
  gap = 6,
}: {
  size?: number;
  gap?: number;
}) => (
  <div
    className="inline-grid align-middle"
    style={{
      gridTemplateColumns: `repeat(4, ${size}px)`,
      gap: `${gap}px`,
      lineHeight: 0, // 텍스트 라인헬스 영향 제거
    }}
    aria-hidden
  >
    {Array.from({ length: 4 }).map((_, i) => (
      <span
        key={i}
        className="block shrink-0"
        style={{
          width: size,
          height: size,
          background: "#000",
          borderRadius: 2,
        }}
      />
    ))}
  </div>
);

const IconDot = () => (
  <div className="flex justify-center items-center leading-none" aria-hidden>
    <span className="inline-block w-3 h-3 md:w-4 md:h-4 bg-black rounded-full" />
  </div>
);

export default function Project1Page() {
  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        Snap Cash - Instant NFT Minting Camera Solution
      </h1>

      <p className="text-lg text-gray-700 mb-4">
        Research Insights: NFT Awareness and Potential
      </p>

      <section className="bg-gray-100 rounded-lg p-6 mt-6 mb-14 md:mt-8 md:mb-24">
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
        <p className="text-base text-gray-700 mb-20 text-pretty">
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
          {/* Circle 1 */}
          <div
            className="w-64 h-64 md:w-72 md:h-72 rounded-full border-2 border-gray-300
                    flex flex-col items-center justify-center text-center bg-white px-4"
          >
            <h3 className="font-bold text-lg mb-1">Terminology</h3>
            <p className="text-sm text-gray-500 leading-tight text-pretty">
              Hard-to-grasp concepts like{" "}
              <span className="font-semibold">Decentralization</span> and{" "}
              <span className="font-semibold">Smart contracts</span>
            </p>
          </div>

          {/* Circle 2 (모바일 겹침 제거) */}
          <div
            className="w-64 h-64 md:w-72 md:h-72 rounded-full border-2 border-gray-300
                    flex flex-col items-center justify-center text-center px-6
                    mt-6 md:mt-0 md:-ml-12"
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
      <section className="mt-16 mb-24">
        <h2 className="text-2xl font-bold mb-6">2. Desk Research</h2>
        <p className="text-base text-gray-700 mb-8 text-pretty">
          20s and 30s users are highly accustomed to taking and sharing photos,
          and they naturally engage with photo-verification-based missions.
          However, the concepts of NFTs and blockchain still feel unfamiliar and
          complicated to many users. Therefore, instead of technical jargon, it
          is more effective to convey the intuitive experience of “my photo is
          securely recorded and remains as my ownership.”
        </p>
        <ClientInlineNFTCharts />
      </section>

      {/* 3. User Needs / Design goal */}
      <h2 className="text-2xl font-bold mb-6">3. User Needs / Design goal</h2>
      <p className="text-base text-gray-700 mb-8 text-pretty">
        Many reward apps rely on advertisements or repetitive behaviors to
        accumulate points, which lowers user motivation and fails to sustain
        long-term engagement. In contrast, people in their 20s and 30s are
        highly accustomed to taking and sharing photos. NFTCAM is designed to
        provide an intuitive and enjoyable reward experience based on photo
        verification, making the process more engaging and straightforward.
      </p>

      {/* Pinpoint / Solution cards */}
      <section className="mt-12 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
          {[
            {
              title: "Pinpoint 01",
              body: "Hard to feel immediate value because a large number of points is required before rewards.",
              solutionTitle: "Solution 01",
              solutionBody:
                "Provide instant rewards even with small point amounts (e.g., low-value gift cards).",
              // + 아이콘은 폰트 대신 SVG(고정폭) 권장
              icon: (
                <img
                  src="/Pinpoint 01.png" // public 폴더 기준 경로
                  alt="Solution 01 icon"
                  className="w-8 h-8 object-contain"
                />
              ),
            },
            {
              title: "Pinpoint 02",
              body: "Monotonous participation methods (step counter, ads).",
              solutionTitle: "Solution 02",
              solutionBody:
                "Offer diverse missions such as location-based tasks, challenges, and shopping verification.",
              icon: (
                <img
                  src="/Pinpoint 02.png"
                  alt="Solution 02 icon"
                  className="w-8 h-8 object-contain"
                />
              ),
            },
            {
              title: "Pinpoint 03",
              body: "Complex UI and unfamiliar technical jargon.",
              solutionTitle: "Solution 03",
              solutionBody:
                "Simplify the verify-and-earn UX; present NFTs in an experience-focused way rather than technical terms.",
              // ✅ 여기서 IconSquares 실제 사용
              icon: <IconSquares size={18} gap={8} />,
            },
            {
              title: "Pinpoint 04",
              body: "Users lose interest after short-term use.",
              solutionTitle: "Solution 04",
              solutionBody:
                "Strengthen immediacy of rewards to maximize short-term motivation.",
              // ✅ 점 아이콘 사용
              icon: <IconDot />,
            },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center w-full">
              {/* Pinpoint 카드 */}
              <div className="rounded-2xl bg-white border border-gray-200 p-6 text-center flex flex-col justify-center min-h-[200px] md:min-h-[240px] leading-snug">
                <p className="text-sm font-semibold text-gray-500 mb-2">
                  {item.title}
                </p>
                <p className="text-gray-800 text-pretty break-words">
                  {item.body}
                </p>
              </div>

              {/* 삼각형 */}
              <div
                aria-hidden
                className="my-3 w-0 h-0 border-l-[12px] border-r-[12px] border-l-transparent border-r-transparent border-t-[16px] border-t-sky-500"
              />

              {/* Solution 카드 */}
              <div className="rounded-2xl bg-white border border-gray-200 p-6 text-center flex flex-col justify-center min-h-[200px] md:min-h-[240px]">
                <p className="text-sm font-semibold text-sky-600 mb-3">
                  {item.solutionTitle}
                </p>
                {/* 아이콘 컨테이너: 텍스트 영향 제거 */}
                <div className="mb-3 flex justify-center items-center flex-none leading-none text-[0]">
                  {item.icon}
                </div>
                <p className="text-gray-800 text-pretty break-words">
                  {item.solutionBody}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Why NFTCAM? */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold mb-4">4. Why NFTCAM?</h2>

        {/* Solution */}
        <div className="mb-16">
          <p className="text-base text-gray-700 mb-20 text-pretty">
            NFTCAM was created to address these issues. The app allows users to
            mint NFTs as easily as taking a photo, simplifying the wallet and
            exchange process while adding gamification and rewards for a more
            engaging experience.
          </p>
          {/* 두 원: 모바일은 세로, 데스크탑은 가로 겹침 */}
          <div className="mt-10 flex flex-col items-center md:flex-row md:justify-center md:gap-8">
            {/* Circle 1 */}
            <div
              className="w-64 h-64 md:w-72 md:h-72 rounded-full border-2 border-gray-300
                    flex flex-col items-center justify-center text-center bg-white px-4"
            >
              <h3 className="font-bold text-lg mb-1">Simplicity</h3>
              <p className="text-sm text-gray-500 leading-tight">
                Minimize steps, make minting as easy as a camera click.
              </p>
            </div>

            {/* Circle 2 */}
            <div
              className="w-64 h-64 md:w-72 md:h-72 rounded-full border-2 border-gray-300
                    flex flex-col items-center justify-center text-center px-6
                    mt-6 md:mt-0 md:-ml-12"
            >
              <h3 className="font-bold text-lg mb-1">Familiarity</h3>
              <p className="text-sm text-gray-500 leading-tight">
                Use patterns users already know (camera UI, reward systems).
              </p>
            </div>

            {/* Circle 3 */}
            <div
              className="w-64 h-64 md:w-72 md:h-72 rounded-full border-2 border-gray-300
                    flex flex-col items-center justify-center text-center px-6
                    mt-6 md:mt-0 md:-ml-12"
            >
              <h3 className="font-bold text-lg mb-1">Engagement</h3>
              <p className="text-sm text-gray-500 leading-tight">
                Add gamification and social feedback loops to keep users active.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4">5. Design System</h2>
        <p className="text-base text-gray-600 mb-8">
          The foundation of the NFTCAM Design System ensures consistency across
          layout, spacing, and radius. These guidelines help maintain a unified
          look and feel throughout the product.
        </p>

        {/* Layout */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-purple-600 mb-4">Layout</h3>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-gray-50 p-6 rounded-xl shadow">
              <ul className="text-sm text-gray-700 space-y-2">
                <li>Status Bar: 24px</li>
                <li>Navigation Bar: 44px</li>
                <li>Left & Right Margin: 20px</li>
                <li>Bottom Margin: 12/48px</li>
                <li>Columns: 6px</li>
                <li>Gutter: 16px</li>
              </ul>
            </div>
            <div className="flex-1 flex items-center justify-center bg-pink-50 rounded-xl">
              <span className="text-gray-400 italic text-sm">
                [Layout Grid Example]
              </span>
            </div>
          </div>
        </div>

        {/* Radius */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-purple-600 mb-4">Radius</h3>
          <div className="grid grid-cols-5 gap-4">
            {[
              { label: "xtiny", size: 4 },
              { label: "tiny", size: 8 },
              { label: "small", size: 12 },
              { label: "base", size: 16 },
              { label: "medium", size: 24 },
            ].map((r) => (
              <div key={r.label} className="flex flex-col items-center">
                <div
                  className="bg-gray-200"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: `${r.size}px`,
                  }}
                />
                <span className="text-sm mt-2 font-medium">{r.size}px</span>
                <span className="text-xs text-gray-500">{r.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Spacing */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-purple-600 mb-4">
            Spacing
          </h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {[
              { label: "xtiny", size: 4 },
              { label: "tiny", size: 8 },
              { label: "xsmall", size: 12 },
              { label: "small", size: 16 },
              { label: "base", size: 24 },
              { label: "medium", size: 32 },
              { label: "large", size: 48 },
              { label: "xlarge", size: 64 },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <div
                  className="bg-purple-200"
                  style={{ width: `${s.size}px`, height: "20px" }}
                />
                <span className="text-sm mt-2 font-medium">{s.size}px</span>
                <span className="text-xs text-gray-500">{s.label}</span>
              </div>
            ))}
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
              {/* 웹: 원형 */}
              <div
                className="hidden sm:flex items-center justify-center rounded-full border border-gray-300 
        text-center text-gray-700 p-4 w-40 h-40 sm:w-48 sm:h-48 text-sm sm:text-base flex-shrink-0"
              >
                {text}
              </div>

              {/* 모바일: 직사각형 */}
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
      </section>

      {/* Footer 여백 */}
      <div className="h-32" />
    </div>
  );
}
