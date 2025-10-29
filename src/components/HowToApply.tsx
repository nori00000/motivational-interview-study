import React from 'react'

export default function HowToApply() {
  const steps = [
    {
      number: '1',
      title: '신청서 작성',
      description: '구글 폼을 통해 간단한 신청서를 작성해주세요',
      action: '신청서 작성하기',
      link: '#',
    },
    {
      number: '2',
      title: '서류 확인',
      description: '신청서 검토 후 2-3일 내로 개별 연락드립니다',
      action: null,
      link: null,
    },
    {
      number: '3',
      title: '오리엔테이션',
      description: '합격자 대상 온라인 OT 참석 (2025년 3월 1일)',
      action: null,
      link: null,
    },
    {
      number: '4',
      title: '스터디 시작',
      description: '첫 모임에서 만나요! (2025년 3월 5일)',
      action: null,
      link: null,
    },
  ]

  const fees = [
    {
      item: '스터디 참가비',
      amount: '120,000원',
      description: '12주 전체 (주당 10,000원)',
    },
    {
      item: '교재비',
      amount: '개인 부담',
      description: '권장 도서 약 3-4권 (약 60,000원)',
    },
  ]

  return (
    <section id="apply" className="section-container bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">신청 방법</h2>
        <p className="section-subtitle">
          동기면담 스터디에 참여하고 싶으신가요? 아래 단계를 따라 신청해주세요
        </p>

        {/* Application steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-6 h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Step number */}
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                  {step.number}
                </div>

                <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 text-center">
                  {step.description}
                </p>

                {step.action && (
                  <a
                    href={step.link || '#'}
                    className="block w-full px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors text-center"
                  >
                    {step.action}
                  </a>
                )}
              </div>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-gray-300 text-2xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Fee information */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="text-2xl mr-2">💰</span>
              참가비 안내
            </h3>
            <div className="space-y-4">
              {fees.map((fee, index) => (
                <div key={index} className="pb-4 border-b border-gray-100 last:border-0">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-gray-900">{fee.item}</span>
                    <span className="font-bold text-blue-600">{fee.amount}</span>
                  </div>
                  <p className="text-sm text-gray-600">{fee.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <span className="font-bold">환불 정책:</span> 스터디 시작 전 전액 환불, 시작 후 회차별 차감
              </p>
            </div>
          </div>

          {/* Contact information */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 text-white shadow-lg">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="text-2xl mr-2">💬</span>
              문의하기
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">카카오톡 오픈채팅</h4>
                <a
                  href="#"
                  className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  오픈채팅 참여하기
                </a>
              </div>
              <div>
                <h4 className="font-semibold mb-2">이메일</h4>
                <a
                  href="mailto:mi.study@example.com"
                  className="text-blue-100 hover:text-white underline"
                >
                  mi.study@example.com
                </a>
              </div>
              <div className="pt-4 border-t border-white/20">
                <p className="text-sm text-blue-100">
                  궁금한 점이 있으시면 언제든 연락주세요. 24시간 내로 답변드리겠습니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Important notice */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center">
            <span className="text-2xl mr-2">⏰</span>
            모집 마감
          </h4>
          <p className="text-gray-700 mb-2">
            <span className="font-bold">신청 마감:</span> 2025년 2월 28일 (금) 자정
          </p>
          <p className="text-gray-700">
            <span className="font-bold">선발 방식:</span> 선착순 8명 (추가 대기자 2명)
          </p>
        </div>
      </div>
    </section>
  )
}
