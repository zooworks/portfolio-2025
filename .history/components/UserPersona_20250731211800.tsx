"use client";

import Image from "next/image";

export default function UserPersona() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-6xl mx-auto space-y-8 font-sans">
      {/* 상단 영역 */}
      <div className="grid grid-cols-[1fr_2fr] gap-8">
        {/* Left Profile */}
        <div className="text-center space-y-4">
          <Image
            src="/persona-koh.png" // 이미지 경로 수정 필요
            width={200}
            height={200}
            alt="Persona"
            className="mx-auto rounded-lg"
          />
          <h2 className="text-xl font-bold">고연희 / 파티쉐 (32)</h2>
          <p className="text-purple-600 font-semibold text-sm">
            새로운 맛 조합 찾기 & 레시피 개발에 관심이 많아요
          </p>
          <p className="text-gray-500 text-xs">
            #호기심많음 #ENTJ #귀차니즘 <br /> #계획적 #화이트등급
          </p>
          <div className="bg-gray-100 p-3 rounded-xl text-gray-700 text-xs italic">
            "믿을 만한 리뷰가 필요하지만, 쓰는 건 귀찮아!"
          </div>
        </div>

        {/* Right Info */}
        <div className="space-y-6">
          {/* Behavior */}
          <div>
            <h3 className="text-purple-600 font-semibold mb-2 text-sm">
              Behavior
            </h3>
            <div className="grid grid-cols-3 gap-2 text-xs text-gray-600">
              <div>
                계획적
                <div className="h-2 bg-purple-500 rounded-full w-[40%]" />
              </div>
              <div>
                새로운 맛
                <div className="h-2 bg-purple-500 rounded-full w-[70%]" />
              </div>
              <div>
                한 번에 구매
                <div className="h-2 bg-purple-500 rounded-full w-[50%]" />
              </div>
            </div>
          </div>

          {/* Needs & Goal */}
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <h4 className="text-purple-600 font-semibold">Needs</h4>
              <p className="text-gray-700 mt-1">
                리뷰를 한눈에 보고, 나에게 맞춘 리뷰를 우선으로 보여줬으면
                좋겠어!
              </p>
            </div>
            <div>
              <h4 className="text-purple-600 font-semibold">Goal</h4>
              <p className="text-gray-700 mt-1">
                리뷰를 통해 실패 없이 만족스러운 제품을 사고 싶다
              </p>
            </div>
          </div>

          {/* 구매 패턴 */}
          <div>
            <h4 className="text-purple-600 font-semibold mb-2 text-sm">
              구매 패턴 분석
            </h4>
            <div className="flex items-center space-x-3 text-xs text-gray-600">
              <div className="flex-1">
                <div className="h-3 bg-purple-600 rounded w-[57%]" />
                식비 57%
              </div>
              <div className="flex-1">
                <div className="h-3 bg-purple-400 rounded w-[23%]" />
                자기계발 23%
              </div>
              <div className="flex-1">
                <div className="h-3 bg-purple-200 rounded w-[13%]" />
                여가 13%
              </div>
              <div className="flex-1">
                <div className="h-3 bg-gray-200 rounded w-[7%]" />
                의류 7%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stage & Emotion */}
      <div className="bg-gray-50 p-6 rounded-xl space-y-4 text-xs">
        <h3 className="text-purple-600 font-semibold text-sm">
          Stage & Emotion
        </h3>
        <div className="grid grid-cols-5 gap-2 text-center font-medium">
          <div>상품검색</div>
          <div>리뷰탐색</div>
          <div>구매</div>
          <div>상품수령</div>
          <div>리뷰작성</div>
        </div>

        {/* 감정곡선은 추후 SVG 차트로 */}
        <div className="text-gray-400 text-center mt-2">
          (여기에 감정 곡선 SVG 추가 예정)
        </div>

        {/* Pain Point */}
        <div className="grid grid-cols-5 gap-2 text-gray-600 mt-4">
          <div>이 상품이 좋은지 확신이 들지 않는다</div>
          <div>맞는 리뷰 검색이 어렵다</div>
          <div>장바구니 담기 편한 방법 없음</div>
          <div>글 적는 게 귀찮다</div>
          <div>리워드 기능 필요</div>
        </div>
      </div>
    </div>
  );
}
