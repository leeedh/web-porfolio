import { motion, useMotionValue, useTransform } from 'framer-motion'
import { personalInfo } from '../lib/data'

/**
 * Hero 컴포넌트 - 지도 기반 프론트엔드 개발자 포트폴리오
 * 
 * 주요 기능:
 * - 지도 그리드 패턴 배경
 * - 마우스 이동 시 parallax 효과
 * - 타이핑 애니메이션으로 역할 표시
 * - CTA 버튼 (View Projects, Download CV)
 * - 부드러운 스크롤 다운 버튼
 */
const Hero = () => {
  // 마우스 위치 추적을 위한 motion values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // parallax 효과를 위한 transform
  const backgroundX = useTransform(mouseX, [-300, 300], [-2, 2])
  const backgroundY = useTransform(mouseY, [-300, 300], [-2, 2])

  // 마우스 이동 핸들러
  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(event.clientX - centerX)
    mouseY.set(event.clientY - centerY)
  }

  // 스크롤 다운 핸들러
  const handleScrollDown = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // 프로젝트 섹션으로 스크롤
  const handleViewProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#0A0E1A' }}
      id="home"
      onMouseMove={handleMouseMove}
    >
      {/* 지도 그리드 패턴 배경 */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          x: backgroundX,
          y: backgroundY,
        }}
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </motion.div>

      {/* 컨텐츠 */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* 인사말 */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted text-lg font-medium tracking-wide"
          >
            Hey! I am
          </motion.span>

          {/* 이름 */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary mt-4 mb-6 leading-tight"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              background: 'linear-gradient(135deg, #60A5FA 0%, #93C5FD 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {personalInfo.name}
          </motion.h1>

          {/* 직함 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-muted mb-4 font-medium"
          >
            <span className="text-primary">{personalInfo.title}</span>
          </motion.div>

          {/* 서브 설명 */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-base sm:text-lg text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {personalInfo.subtitle}
          </motion.p>

          {/* CTA 버튼들 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewProjects}
              className="bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-soft hover:shadow-glow transition-all duration-300 min-w-[160px]"
            >
              View Projects
            </motion.button>
            
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300 min-w-[160px]"
            >
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* 스크롤 다운 버튼 */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        whileHover={{ y: 5 }}
      >
        <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-muted rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero




