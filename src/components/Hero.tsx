import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import './Hero.css'

/**
 * Hero 컴포넌트
 * 
 * 메인 랜딩 섹션으로 다음 기능을 포함:
 * - 타이핑 애니메이션 효과 (react-type-animation 라이브러리 사용)
 * - Framer Motion을 사용한 페이드인 애니메이션
 * - 스크롤 다운 버튼 (마우스 아이콘)
 */
const Hero = () => {
  // 스크롤 다운 핸들러
  const handleScrollDown = () => {
    const element = document.getElementById('about-section')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero-section" id="home-section">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="hero-subheading">Hey! I am</span>
            <h1 className="hero-name">구민정</h1>
            <h2 className="hero-title">
              I'm a{' '}
              <TypeAnimation
                sequence={[
                  '풀스택 개발자',
                  2000,
                  '스타트업 개발자',
                  2000,
                  '6년차',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="hero-typing"
                repeat={Infinity}
              />
            </h2>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        className="mouse-icon"
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="mouse-wheel">
          <span>↓</span>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero



