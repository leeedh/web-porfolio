import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { personalInfo } from '../lib/data'

/**
 * About 컴포넌트 - 지도 기반 프론트엔드 개발자 소개
 * 
 * 주요 기능:
 * - 프로필 이미지와 개인 정보 표시
 * - 지도 관련 전문성 강조
 * - 프로젝트 완료 수 카운터 애니메이션
 * - 이력서 다운로드 링크
 * - Intersection Observer를 사용한 스크롤 애니메이션
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section className="py-20" style={{ backgroundColor: '#111827' }} id="about">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* 프로필 이미지 */}
          <motion.div
            variants={fadeInUp}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img 
                src="/images/about.jpg" 
                alt="Donghoon Lee" 
                className="w-full h-auto object-cover"
              />
              {/* 지도 오버레이 효과 */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* 지도 아이콘 장식 */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
          </motion.div>
          
          {/* 컨텐츠 */}
          <motion.div variants={fadeInUp} className="space-y-8">
            {/* 제목 */}
            <div>
              <span className="text-primary font-semibold text-lg tracking-wide uppercase">About</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2 mb-4">About Me</h2>
              <p className="text-base sm:text-lg text-muted leading-relaxed">
                {personalInfo.description}
              </p>
            </div>
            
            {/* 개인 정보 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-semibold text-secondary uppercase tracking-wide">Name</span>
                <span className="text-muted">{personalInfo.name}</span>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-semibold text-secondary uppercase tracking-wide">Location</span>
                <span className="text-muted">{personalInfo.location}</span>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-semibold text-secondary uppercase tracking-wide">Email</span>
                <a href={`mailto:${personalInfo.email}`} className="text-primary hover:text-primary/80 transition-colors duration-300">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-semibold text-secondary uppercase tracking-wide">Phone</span>
                <a href={`tel:${personalInfo.phone}`} className="text-primary hover:text-primary/80 transition-colors duration-300">
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            {/* 전문성 강조 */}
            <div className="backdrop-blur-sm rounded-xl p-6 border" style={{ backgroundColor: 'rgba(31, 41, 55, 0.8)', borderColor: '#374151' }}>
              <h3 className="text-xl font-semibold text-primary mb-4">지도 & 공간데이터 전문성</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-muted">GIS 데이터 처리</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-muted">3D 지도 시각화</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-muted">실시간 위치 서비스</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-muted">공간 데이터 분석</span>
                </div>
              </div>
            </div>

            {/* 프로젝트 카운터 & CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
              <motion.div
                className="text-center sm:text-left"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-primary mb-1">
                  {personalInfo.projectsCompleted}+
                </div>
                <div className="text-sm text-muted">Projects Completed</div>
              </motion.div>
              
              <motion.a
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-6 py-3 rounded-xl font-semibold shadow-soft hover:shadow-glow transition-all duration-300"
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
