export default function Project3() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">
        🚧 Work in Progress
      </h1>
      <p className="text-gray-500 text-base md:text-lg">
        This project page is currently under construction.
        <br />
        Please check back soon!
      </p>

      <a
        href="/work"
        className="mt-8 text-sm text-blue-600 hover:text-blue-800 underline"
      >
        ← Back to Works
      </a>
    </div>
  );
}
