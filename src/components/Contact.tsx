import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { personalInfo } from '../lib/data'

/**
 * Contact 컴포넌트 - 연락처 섹션
 * 
 * 주요 기능:
 * - 연락처 정보 표시
 * - 간단한 연락 방법 안내
 * - 소셜 미디어 링크
 * - Intersection Observer를 사용한 스크롤 애니메이션
 */
const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const contactMethods = [
    {
      title: 'Email',
      description: '가장 빠른 연락 방법',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
        </svg>
      )
    },
    {
      title: 'Phone',
      description: '직접 통화 가능',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
        </svg>
      )
    },
    {
      title: 'GitHub',
      description: '프로젝트 소스코드',
      value: 'github.com/leeedh',
      href: personalInfo.github,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    }
  ]

  return (
    <section className="py-20" style={{ backgroundColor: '#111827' }} id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-lg tracking-wide uppercase">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2 mb-4">Get In Touch</h2>
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
            새로운 프로젝트나 협업 기회에 대해 이야기하고 싶으시다면 언제든 연락주세요.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {contactMethods.map((method) => (
            <motion.div
              key={method.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -8 }}
              className="bg-card/80 backdrop-blur-sm rounded-xl p-8 shadow-soft hover:shadow-medium border border-border transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-6">
                {method.icon}
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-2">
                {method.title}
              </h3>
              
              <p className="text-muted text-sm mb-4">
                {method.description}
              </p>
              
              <motion.a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:text-primary/80 transition-colors duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {method.value}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* 추가 메시지 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 shadow-soft border border-border max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4">
              함께 멋진 프로젝트를 만들어요!
            </h3>
            <p className="text-muted text-base sm:text-lg leading-relaxed mb-6">
              지도와 공간데이터를 활용한 웹 서비스 개발에 관심이 있으시거나, 
              새로운 기술 스택에 대해 이야기하고 싶으시다면 언제든 연락주세요.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-6 py-3 rounded-xl font-semibold shadow-soft hover:shadow-glow transition-all duration-300"
              >
                Download Resume
              </motion.a>
              
              <motion.a
                href={`mailto:${personalInfo.email}?subject=프로젝트 협업 문의`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300"
              >
                Send Email
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact