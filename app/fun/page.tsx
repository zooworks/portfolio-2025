export default function Fun() {
  return (
    <>
      <div className="px-6 py-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Fun Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 실험작 1 */}
          <div className="border p-4 rounded">
            <img
              src="/images/fun1.jpg"
              alt="SLBT Project"
              className="rounded"
            />
            <h3 className="mt-4 font-semibold">SLBT (AI 이미지 실험)</h3>
            <p className="text-sm text-gray-500">Midjourney를 사용한 AI 기반 이미지 실험 프로젝트</p>
          </div>

          {/* 실험작 2 */}
          <div className="border p-4 rounded">
            <img
              src="/images/fun2.jpg"
              alt="Celestial Pabulum"
              className="rounded"
            />
            <h3 className="mt-4 font-semibold">Celestial Pabulum</h3>
            <p className="text-sm text-gray-500">기성 작품을 상상력으로 재해석한 비주얼 콜라주</p>
          </div>
        </div>
      </div>
    </>
  );
}
