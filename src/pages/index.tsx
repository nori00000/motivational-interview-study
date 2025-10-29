import Head from 'next/head'
import Hero from '@/components/Hero'
import Introduction from '@/components/Introduction'
import Target from '@/components/Target'
import Schedule from '@/components/Schedule'
import HowToApply from '@/components/HowToApply'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <>
      <Head>
        <title>동기면담 스터디 - 함께 성장하는 시간</title>
        <meta
          name="description"
          content="변화를 이끌어내는 대화의 기술, 동기면담을 배우고 실습하며 성장하는 12주 스터디입니다"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="동기면담 스터디 - 함께 성장하는 시간" />
        <meta
          property="og:description"
          content="변화를 이끌어내는 대화의 기술, 동기면담을 배우고 실습하며 성장하는 12주 스터디입니다"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <Hero />
        <Introduction />
        <Target />
        <Schedule />
        <HowToApply />
        <FAQ />

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-white font-bold text-lg mb-4">동기면담 스터디</h3>
                <p className="text-sm leading-relaxed">
                  변화를 이끌어내는 대화의 기술을 함께 배우고 성장하는 커뮤니티입니다.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-4">바로가기</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#introduction" className="hover:text-white transition-colors">
                      스터디 소개
                    </a>
                  </li>
                  <li>
                    <a href="#target" className="hover:text-white transition-colors">
                      모집 대상
                    </a>
                  </li>
                  <li>
                    <a href="#schedule" className="hover:text-white transition-colors">
                      일정 및 커리큘럼
                    </a>
                  </li>
                  <li>
                    <a href="#apply" className="hover:text-white transition-colors">
                      신청하기
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-4">문의</h3>
                <ul className="space-y-2 text-sm">
                  <li>이메일: mi.study@example.com</li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      카카오톡 오픈채팅
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm">
              <p>&copy; 2025 동기면담 스터디. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
