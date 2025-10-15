import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

/**
 * Navbar 컴포넌트
 * 
 * 기능:
 * - 스크롤 시 네비게이션 바 스타일 변경 (scrolled 클래스 추가)
 * - 모바일 반응형 메뉴 토글 기능
 * - 스무스 스크롤을 통한 섹션 이동
 * - 현재 섹션에 따라 active 메뉴 표시
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // 스크롤 이벤트 핸들러
  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 위치가 150px 이상이면 scrolled 상태로 변경
      setIsScrolled(window.scrollY > 150)

      // 현재 보이는 섹션 찾기
      const sections = ['home', 'about', 'education', 'projects', 'side-projects', 'blog', 'contact']
      
      for (const section of sections) {
        const element = document.getElementById(`${section}-section`)
        if (element) {
          const rect = element.getBoundingClientRect()
          // 섹션이 화면 중앙에 있으면 active로 설정
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
    const element = document.getElementById(`${sectionId}-section`)
    if (element) {
      const offset = 70 // 네비게이션 바 높이만큼 오프셋
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'side-projects', label: 'Side Projects' },
    { id: 'blog', label: 'My Blog' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="navbar-content">
          <a href="#home-section" className="navbar-brand" onClick={(e) => {
            e.preventDefault()
            scrollToSection('home')
          }}>
            <span>K</span>ooMinJeong
          </a>
          
          <button 
            className={`navbar-toggler ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="navbar-nav">
              {menuItems.map((item) => (
                <li key={item.id} className="nav-item">
                  <a
                    href={`#${item.id}-section`}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.id)
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar




