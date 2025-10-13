import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Contact.css'

/**
 * Contact 컴포넌트
 * 
 * 연락처 섹션:
 * - 주소, 전화번호, 이메일, 웹사이트 정보를 카드 형태로 표시
 * - 각 카드는 아이콘과 함께 표시
 * - 호버 시 애니메이션 효과
 */
const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      id: 1,
      icon: '📍',
      title: 'Address',
      content: '성남시 분당구 정자동',
      link: null,
    },
    {
      id: 2,
      icon: '📞',
      title: 'Contact Number',
      content: '+ 010 4277 1234',
      link: 'tel:01042771234',
    },
    {
      id: 3,
      icon: '✉️',
      title: 'Email Address',
      content: 'cookie00421@gmail.com',
      link: 'mailto:cookie00421@gmail.com',
    },
    {
      id: 4,
      icon: '🌐',
      title: 'Website',
      content: 'yoursite.com',
      link: '#',
    },
  ]

  return (
    <section className="contact-section section" id="contact-section">
      <div className="container">
        <motion.div
          ref={ref}
          className="heading-section text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="big big-2">Contact</h1>
          <h2 className="mb-4">Contact Me</h2>
          <p>회사와 함께 성장하는 개발자가 되겠습니다. 연락주세요.</p>
        </motion.div>

        <div className="contact-grid">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.id}
              className="contact-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="contact-icon">
                <span>{info.icon}</span>
              </div>
              <div className="contact-content">
                <h3>{info.title}</h3>
                {info.link ? (
                  <a href={info.link}>{info.content}</a>
                ) : (
                  <p>{info.content}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact



