import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { navigationItems } from '../lib/data'

/**
 * Navbar 컴포넌트 - 지도 기반 프론트엔드 개발자 포트폴리오
 * 
 * 주요 기능:
 * - 스크롤 시 배경 블러 효과
 * - 모바일 반응형 햄버거 메뉴
 * - 스무스 스크롤을 통한 섹션 이동
 * - 현재 섹션에 따른 active 메뉴 표시
 * - 지도 아이콘 브랜딩
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // 스크롤 이벤트 핸들러
  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 위치가 100px 이상이면 scrolled 상태로 변경
      setIsScrolled(window.scrollY > 100)

      // 현재 보이는 섹션 찾기
      const sections = navigationItems.map(item => item.href.replace('#', ''))
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // 섹션이 화면 상단 300px 내에 있으면 active로 설정
          if (rect.top <= 300 && rect.bottom >= 300) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 섹션으로 스크롤
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // 네비게이션 바 높이만큼 오프셋
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-secondary/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* 브랜드 로고 */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('home')
            }}
            className="flex items-center space-x-2 text-xl font-bold text-secondary hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Donghoon Lee</span>
          </motion.a>
          
          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href.replace('#', ''))
                }}
                className={`relative font-medium transition-colors duration-300 ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-primary'
                    : 'text-muted hover:text-secondary'
                }`}
                whileHover={{ y: -2 }}
              >
                {item.name}
                {activeSection === item.href.replace('#', '') && (
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* 모바일 햄버거 버튼 */}
          <motion.button
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className={`w-6 h-0.5 bg-secondary transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <motion.span
              className={`w-6 h-0.5 bg-secondary transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <motion.span
              className={`w-6 h-0.5 bg-secondary transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </motion.button>
        </div>

        {/* 모바일 메뉴 */}
        <motion.div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          initial={false}
        >
          <div className="py-4 space-y-4">
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href.replace('#', ''))
                }}
                className={`block py-2 px-4 rounded-lg font-medium transition-colors duration-300 ${
                  activeSection === item.href.replace('#', '')
                    ? 'bg-primary text-white'
                    : 'text-muted hover:text-secondary hover:bg-background'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar




