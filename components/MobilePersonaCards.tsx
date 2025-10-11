export default function MobilePersonaCards() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full">
      {/* Persona 1 */}
      <div className="flex-1 border border-gray-200 rounded-2xl p-6 shadow bg-white">
        <h3 className="text-lg font-bold text-purple-600 mb-1">Go Yeon-hee</h3>
        <p className="text-gray-500 text-sm mb-4">Party Lover</p>
        <blockquote className="italic text-gray-700 mb-4">
          “I need trustworthy reviews, but I’m too lazy to write one!”
        </blockquote>

        <p className="text-sm mb-2">
          <span className="font-semibold">Interest:</span> Interested in
          discovering new flavor combinations and developing recipes.
        </p>

        <div className="bg-purple-50 rounded-lg p-3 text-sm mb-4">
          <p>
            <span className="font-semibold">Needs:</span> I want quick,
            personalized reviews at a glance.
          </p>
          <p>
            <span className="font-semibold">Goal:</span> I want reviews to
            ensure I buy satisfying products.
          </p>
        </div>

        <p className="text-sm">
          <span className="font-semibold">Behavior:</span>
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>Impulsive buyer</li>
          <li>Prefers new flavors</li>
          <li>Buys all at once</li>
        </ul>
      </div>

      {/* Persona 2 */}
      <div className="flex-1 border border-gray-200 rounded-2xl p-6 shadow bg-white">
        <h3 className="text-lg font-bold text-purple-600 mb-1">Hae-Mi Park</h3>
        <p className="text-gray-500 text-sm mb-4">IT Designer</p>
        <blockquote className="italic text-gray-700 mb-4">
          “What should I eat today… Deciding every time is exhausting!”
        </blockquote>

        <p className="text-sm mb-2">
          <span className="font-semibold">Interest:</span> I want to have a
          healthy meal plan and an efficient diet.
        </p>

        <div className="bg-purple-50 rounded-lg p-3 text-sm mb-4">
          <p>
            <span className="font-semibold">Needs:</span> I want a
            nutritionist-style meal plan to solve the “What should I eat?”
            problem.
          </p>
          <p>
            <span className="font-semibold">Goal:</span> A meal service tailored
            to my preferred menus and balanced nutrition.
          </p>
        </div>

        <p className="text-sm">
          <span className="font-semibold">Behavior:</span>
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>Meal planner</li>
          <li>Prefers new flavors</li>
          <li>Split purchase</li>
        </ul>
      </div>
    </div>
  );
}
