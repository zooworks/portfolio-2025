// components/Results.tsx
export default function Results() {
  return (
    <section id="results" className="mt-10">
      {/* Launch + Growth */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-gray-600">
              App Store &amp; Google Play — Official Launch
            </p>
            <h3 className="mt-1 text-xl font-bold">
              Growth Driven by Real Users
            </h3>
            <p className="mt-1 text-gray-700">
              Steady downloads and participation since launch{" "}
              <span className="font-semibold">(9,000+ records)</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Result cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <Card
          title="Usability Validation"
          body="Verified the end-to-end core flow — photo verification → points → reward redemption — and achieved high user satisfaction."
        />
        <Card
          title="Technical Differentiation"
          body="Blockchain-based NFT storage ensures both data integrity and ownership."
        />
        <Card
          title="Market Fit Confirmed"
          body="Addressed 20s–30s needs around ‘photo verification + app-tech’, securing an early user base organically."
        />
        <Card
          title="Engagement Drivers"
          body="A variety of missions—from micro-rewards to long-term challenges—sustain ongoing participation."
        />
        <Card
          title="Category Diversification"
          body="Expanded brand partnerships to diversify the reward categories."
        />
        <Card
          title="User Base Expansion"
          body="Long-term plan to evolve into an app-tech platform and reach a broader audience."
        />
        <Card
          title="Business Scalability"
          body="Long-term tokenomics strategy and Web3 expansion."
        />
      </div>
    </section>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-700 leading-relaxed">{body}</p>
    </div>
  );
}
