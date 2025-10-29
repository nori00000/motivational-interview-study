import React from 'react'

export default function Schedule() {
  const curriculum = [
    {
      week: '1-2주',
      title: '동기면담의 기초',
      topics: [
        '동기면담의 정신(Spirit)과 원리',
        '동기면담이 필요한 이유',
        '전통적 상담과의 차이점',
      ],
    },
    {
      week: '3-4주',
      title: 'OARS 기술 - 기본',
      topics: [
        '열린 질문(Open Questions) 연습',
        '인정하기(Affirmations)',
        '반영적 경청(Reflective Listening) 기초',
      ],
    },
    {
      week: '5-6주',
      title: 'OARS 기술 - 심화',
      topics: [
        '복잡한 반영(Complex Reflections)',
        '요약하기(Summarizing)',
        '실제 대화 실습',
      ],
    },
    {
      week: '7-8주',
      title: '변화 대화 이끌어내기',
      topics: [
        '변화 대화(Change Talk) 인식하기',
        '변화 대화 강화하기',
        '유지 대화(Sustain Talk) 다루기',
      ],
    },
    {
      week: '9-10주',
      title: '저항과 양가감정 다루기',
      topics: [
        '저항의 본질 이해하기',
        '불일치 다루기(Developing Discrepancy)',
        '저항과 함께 굴러가기(Rolling with Resistance)',
      ],
    },
    {
      week: '11-12주',
      title: '통합 실습 및 마무리',
      topics: [
        '실제 사례 적용 실습',
        '종합 피드백 세션',
        '개인별 성장 계획 수립',
      ],
    },
  ]

  const scheduleInfo = [
    { icon: '📅', label: '기간', value: '2025년 3월 5일 - 5월 28일 (12주)' },
    { icon: '🕐', label: '시간', value: '매주 수요일 19:00 - 21:00' },
    { icon: '📍', label: '장소', value: '온라인 (Zoom) + 오프라인 (선택)' },
    { icon: '👥', label: '정원', value: '최대 8명 (선착순)' },
  ]

  return (
    <section id="schedule" className="section-container bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">스터디 일정</h2>
        <p className="section-subtitle">
          12주간의 체계적인 커리큘럼으로 동기면담의 기초부터 실전까지 함께 배웁니다
        </p>

        {/* Schedule info cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {scheduleInfo.map((info, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center border-2 border-blue-100"
            >
              <div className="text-4xl mb-3">{info.icon}</div>
              <div className="text-sm text-gray-600 mb-1">{info.label}</div>
              <div className="font-bold text-gray-900 text-sm">{info.value}</div>
            </div>
          ))}
        </div>

        {/* Curriculum timeline */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">주차별 커리큘럼</h3>
          {curriculum.map((item, index) => (
            <div
              key={index}
              className="relative bg-white border-2 border-gray-100 rounded-xl p-6 md:p-8 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Week badge */}
                <div className="flex-shrink-0">
                  <div className="inline-block px-4 py-2 bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold rounded-lg">
                    {item.week}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                  <ul className="space-y-2">
                    {item.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start text-gray-700">
                        <span className="text-blue-500 mr-3 mt-1">▹</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Connector line (except for last item) */}
              {index < curriculum.length - 1 && (
                <div className="hidden md:block absolute left-16 top-full w-0.5 h-6 bg-gradient-to-b from-gray-200 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center">
            <span className="text-2xl mr-2">📌</span>
            안내사항
          </h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>매주 모임 전 사전 학습 자료(논문, 책 챕터 등)를 읽고 와주셔야 합니다</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>실습 세션에서는 2-3명씩 소그룹으로 나누어 실습을 진행합니다</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>오프라인 모임은 월 1회 정도 계획되어 있으며, 참석은 선택입니다</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
