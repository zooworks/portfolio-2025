import Image from "next/image";

export default function Work() {
  return (
    <>
      <div className="px-6 py-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 샘플 카드 1 */}
          <div className="border p-4 rounded">
            <Image
              src="/images/project1.jpg"
              alt="Project 1"
              width={600}
              height={400}
              className="rounded"
            />
            <h3 className="mt-4 font-semibold">AI Assistant</h3>
            <p className="text-sm text-gray-500">설문 이탈률 30% 감소 프로젝트</p>
          </div>
          {/* 샘플 카드 2 */}
          <div className="border p-4 rounded">
            <Image
              src="/images/project2.jpg"
              alt="Project 2"
              width={600}
              height={400}
              className="rounded"
            />
            <h3 className="mt-4 font-semibold">Kudo App</h3>
            <p className="text-sm text-gray-500">환경 행동 유도용 UX 설계</p>
          </div>
        </div>
      </div>
    </>
  );
}
