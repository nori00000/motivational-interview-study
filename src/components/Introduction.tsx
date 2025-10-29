import React from 'react'

export default function Introduction() {
  const features = [
    {
      icon: '💬',
      title: '변화를 이끄는 대화',
      description: '명령이 아닌 질문으로, 강요가 아닌 공감으로 상대방의 내적 동기를 발견하고 변화를 지원합니다'
    },
    {
      icon: '🎓',
      title: '이론과 실습의 균형',
      description: '동기면담의 핵심 이론을 학습하고, 실제 대화 연습을 통해 기술을 체화합니다'
    },
    {
      icon: '🤝',
      title: '안전한 학습 환경',
      description: '서로 존중하고 지지하는 분위기에서 편안하게 실수하고 배울 수 있습니다'
    },
    {
      icon: '📚',
      title: '체계적인 커리큘럼',
      description: '기초부터 심화까지 단계적으로 구성된 12주 프로그램으로 실력을 쌓아갑니다'
    },
  ]

  return (
    <section id="introduction" className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">동기면담이란?</h2>
        <p className="section-subtitle">
          Motivational Interviewing은 내담자의 양가감정을 탐색하고 변화 동기를 강화하여
          행동 변화를 이끌어내는 대화 기법입니다
        </p>

        {/* Main content */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">스터디 목표</h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="flex items-start">
              <span className="text-blue-600 font-bold mr-3 mt-1">✓</span>
              <span>동기면담의 정신(Spirit)과 핵심 원리를 이해하고 내재화합니다</span>
            </p>
            <p className="flex items-start">
              <span className="text-blue-600 font-bold mr-3 mt-1">✓</span>
              <span>OARS 기술(열린 질문, 인정, 반영, 요약)을 실제 대화에서 활용할 수 있습니다</span>
            </p>
            <p className="flex items-start">
              <span className="text-blue-600 font-bold mr-3 mt-1">✓</span>
              <span>변화 대화(Change Talk)를 인식하고 강화하는 방법을 익힙니다</span>
            </p>
            <p className="flex items-start">
              <span className="text-blue-600 font-bold mr-3 mt-1">✓</span>
              <span>실제 상황에서 동기면담을 적용하고 피드백을 주고받으며 성장합니다</span>
            </p>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
