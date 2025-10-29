import React from 'react'

export default function Target() {
  const idealParticipants = [
    {
      title: '상담 및 코칭 관련 종사자',
      description: '심리상담사, 코치, 사회복지사 등 대화를 통해 사람을 돕는 분들',
      icon: '👥'
    },
    {
      title: '의료 및 보건 전문가',
      description: '의사, 간호사, 영양사 등 환자의 행동 변화가 필요한 분야 종사자',
      icon: '⚕️'
    },
    {
      title: '교육 종사자',
      description: '교사, 강사 등 학습자의 동기를 이끌어내고 싶은 교육자',
      icon: '🎓'
    },
    {
      title: '리더 및 관리자',
      description: '팀원의 성장과 변화를 지원하고 싶은 리더와 관리자',
      icon: '💼'
    },
    {
      title: '대화 기술에 관심 있는 분',
      description: '일상에서 더 나은 대화를 나누고 싶은 모든 분들',
      icon: '💡'
    },
  ]

  const requirements = [
    {
      title: '주 1회 정기 모임 참석',
      description: '매주 수요일 저녁 7시-9시 (온라인/오프라인 병행)'
    },
    {
      title: '사전 학습 및 과제 수행',
      description: '매주 제시되는 읽기 자료와 실습 과제 완료'
    },
    {
      title: '적극적인 참여',
      description: '실습 연습과 피드백에 적극적으로 참여'
    },
    {
      title: '서로에 대한 존중',
      description: '안전한 학습 환경을 위한 비밀 보장과 상호 존중'
    },
  ]

  return (
    <section id="target" className="section-container bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">누가 참여하면 좋을까요?</h2>
        <p className="section-subtitle">
          동기면담에 관심 있는 모든 분들을 환영합니다. 특히 다음과 같은 분들에게 추천합니다
        </p>

        {/* Ideal participants */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {idealParticipants.map((participant, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{participant.icon}</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{participant.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{participant.description}</p>
            </div>
          ))}
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">참여 조건</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-gray-900 mb-1">{req.title}</h5>
                  <p className="text-gray-600 text-sm">{req.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-xl border-2 border-blue-100">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-blue-600">💡 참고사항:</span> 동기면담에 대한 사전 지식이 없어도 괜찮습니다.
              배우고자 하는 열정과 적극적인 참여 의지가 가장 중요합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
