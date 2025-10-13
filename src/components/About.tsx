import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './About.css'

/**
 * About 컴포넌트
 * 
 * 개발자 소개 섹션:
 * - 프로필 이미지와 정보 표시
 * - 카운터 애니메이션 (완료한 프로젝트 수)
 * - 이력서 다운로드 링크
 * - Intersection Observer를 사용해 스크롤 시 애니메이션 트리거
 */
const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="about-section section" id="about-section">
      <div className="container">
        <motion.div
          ref={ref}
          className="row about-row"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <div className="col-md-6">
            <div className="about-image">
              <div className="about-overlay"></div>
              <img src="/images/about.jpg" alt="About Me" />
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="about-content">
              <div className="heading-section">
                <h1 className="big">About</h1>
                <h2 className="mb-4">About Me</h2>
                <p>커피와 노트북만 있다면, 언제 어디서나 즐겁게 일하는 6년차 개발자 정쿠입니다.</p>
              </div>
              
              <ul className="about-info">
                <li>
                  <span className="label">Name:</span>
                  <span className="value">구민정</span>
                </li>
                <li>
                  <span className="label">Address:</span>
                  <span className="value">성남시 분당구 정자동</span>
                </li>
                <li>
                  <span className="label">Email:</span>
                  <span className="value">cookie00421@gmail.com</span>
                </li>
                <li>
                  <span className="label">Phone:</span>
                  <span className="value">+82-10-1234-5678</span>
                </li>
              </ul>

              <div className="about-counter">
                <motion.div
                  className="counter-number"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <span className="number">24</span>
                  <span className="text">Project complete</span>
                </motion.div>
                
                <a
                  href="https://drive.google.com/file/d/1uJg0Yun35HWc4YsEKfEX5L6Uyik5MPl_/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  이력서 다운받기
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About



