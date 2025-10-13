import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Hire.css'

/**
 * Hire 컴포넌트
 * 
 * 채용 요청 섹션:
 * - 배경 이미지와 오버레이
 * - CTA (Call To Action) 버튼
 * - 간단한 메시지와 함께 연락 유도
 */
const Hire = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleContact = () => {
    const contactSection = document.getElementById('contact-section')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hire-section section" id="hire-section">
      <div className="hire-overlay"></div>
      <div className="container">
        <motion.div
          ref={ref}
          className="hire-content"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            함께할 <span className="highlight">회사를 찾는 중</span> 입니다.
          </h2>
          <p>
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
          <button className="btn btn-primary" onClick={handleContact}>
            연락주세요
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hire



