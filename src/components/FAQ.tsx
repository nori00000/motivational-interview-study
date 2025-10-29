import React, { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-blue-200 transition-colors">
      <button
        onClick={onClick}
        className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <span
          className={`flex-shrink-0 text-2xl text-blue-600 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          ▼
        </span>
      </button>
      <div
        className={`px-6 pb-5 text-gray-700 leading-relaxed transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        {answer}
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: '동기면담을 전혀 모르는데 참여할 수 있나요?',
      answer:
        '물론입니다! 스터디는 동기면담의 기초부터 시작하므로 사전 지식이 없어도 괜찮습니다. 배우고자 하는 열정과 적극적인 참여 의지가 가장 중요합니다.',
    },
    {
      question: '온라인으로만 참여 가능한가요?',
      answer:
        '네, 온라인 참여도 가능합니다. 정기 모임은 온라인(Zoom)으로 진행되며, 오프라인 모임은 월 1회 정도 선택적으로 진행됩니다. 오프라인 모임 불참 시에도 스터디 진행에는 문제가 없습니다.',
    },
    {
      question: '매주 과제가 많이 부담스러울까요?',
      answer:
        '매주 논문이나 책의 일부를 읽어오는 사전 학습(약 1-2시간)과 간단한 실습 과제가 있습니다. 바쁜 일정을 고려하여 과제량은 합리적으로 조정되어 있으며, 서로의 상황을 이해하고 지지하는 분위기에서 진행됩니다.',
    },
    {
      question: '중간에 불참하면 어떻게 되나요?',
      answer:
        '부득이한 사정으로 결석할 경우, 녹화 영상과 자료를 제공해드립니다. 다만, 실습이 중요한 스터디이므로 가급적 실시간 참여를 권장드리며, 80% 이상 출석을 권장합니다.',
    },
    {
      question: '수료증이 발급되나요?',
      answer:
        '80% 이상 출석하고 모든 과제를 완료하신 분께는 스터디 수료증을 발급해드립니다. 다만, 이는 공식 자격증이 아닌 스터디 참여 증빙 자료입니다.',
    },
    {
      question: '교재는 어떤 것을 사용하나요?',
      answer:
        '주교재는 "동기면담(Motivational Interviewing)" (저자: William R. Miller & Stephen Rollnick)이며, 추가로 관련 논문과 자료를 제공합니다. 교재는 개인적으로 구매하셔야 합니다.',
    },
    {
      question: '8명보다 적게 모집되면 어떻게 되나요?',
      answer:
        '최소 인원은 5명입니다. 만약 5명 미만으로 신청될 경우 일정을 조정하거나 다음 기수로 연기될 수 있으며, 이 경우 개별 연락드립니다.',
    },
    {
      question: '스터디 후속 모임이 있나요?',
      answer:
        '12주 스터디 종료 후 참여자들의 의견에 따라 심화 스터디나 정기 모임을 이어갈 수 있습니다. 이는 참여자들과 함께 결정하게 됩니다.',
    },
  ]

  return (
    <section id="faq" className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">자주 묻는 질문</h2>
        <p className="section-subtitle">
          동기면담 스터디에 대해 궁금하신 점을 확인해보세요
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-blue-100">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            더 궁금한 점이 있으신가요?
          </h3>
          <p className="text-gray-600 mb-6">
            언제든지 문의해주세요. 친절하게 답변드리겠습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#apply"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              신청하기
            </a>
            <a
              href="mailto:mi.study@example.com"
              className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg shadow-md hover:shadow-lg border-2 border-gray-200 hover:border-gray-300 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              이메일 문의
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
