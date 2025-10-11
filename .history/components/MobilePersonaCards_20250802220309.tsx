export default function MobilePersonaCards() {
  const personas = [
    {
      name: "Go Yeon-hee",
      role: "Party Lover",
      quote: "I need trustworthy reviews, but I’m too lazy to write one!",
      interest:
        "Interested in discovering new flavor combinations and developing recipes.",
      needs: "I want quick, personalized reviews at a glance.",
      goal: "I want reviews to ensure I buy satisfying products.",
      behavior: ["Impulsive buyer", "Prefers new flavors", "Buys all at once"],
    },
    {
      name: "Hae-Mi Park",
      role: "IT Designer",
      quote: "What should I eat today… Deciding every time is exhausting!",
      interest: "I want to have a healthy meal plan and an efficient diet.",
      needs:
        "I want a nutritionist-style meal plan to solve the “What should I eat?” problem.",
      goal: "A meal service tailored to my preferred menus and balanced nutrition.",
      behavior: [
        "Planned buyer",
        "Mix of new & familiar flavors",
        "Split purchase",
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-6 p-4 max-w-md mx-auto">
      {personas.map((p, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow p-6 flex flex-col gap-3 border border-gray-100"
        >
          {/* Header */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-bold text-purple-600">{p.name}</h3>
            <p className="text-sm text-gray-500">{p.role}</p>
          </div>

          {/* Quote */}
          <blockquote className="text-sm text-gray-600 italic text-center border-l-4 border-purple-400 pl-3 my-2">
            “{p.quote}”
          </blockquote>

          {/* Interest */}
          <p className="text-gray-700 text-sm">
            <span className="font-semibold">Interest:</span> {p.interest}
          </p>

          {/* Needs & Goal */}
          <div className="bg-purple-50 p-3 rounded-lg text-sm text-gray-700">
            <p>
              <span className="font-semibold">Needs:</span> {p.needs}
            </p>
            <p className="mt-1">
              <span className="font-semibold">Goal:</span> {p.goal}
            </p>
          </div>

          {/* Behavior */}
          <div className="text-sm text-gray-700">
            <span className="font-semibold">Behavior:</span>
            <ul className="list-disc list-inside mt-1">
              {p.behavior.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
