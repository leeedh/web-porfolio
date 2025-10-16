import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'

/**
 * App 컴포넌트 - 지도 기반 프론트엔드 개발자 포트폴리오
 * 
 * 새로운 구조:
 * - Hero: 메인 랜딩 섹션
 * - About: 개발자 소개
 * - Skills: 기술 스택
 * - Projects: 프로젝트 포트폴리오
 * - Contact: 연락처 정보
 * - Footer: 하단 정보
 */
function App() {
  useEffect(() => {
    // 페이지 로드 시 스크롤 위치 초기화
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A0E1A', color: '#F8FAFC' }}>
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App




