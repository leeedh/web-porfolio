import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect, useRef } from 'react'
import './Resume.css'

/**
 * Resume 컴포넌트
 * 
 * 이력서 섹션으로 4개의 탭으로 구성:
 * - Education: 학력 정보
 * - Experience: 경력 정보
 * - Skills: 기술 스택 (프로그레스 바로 표시)
 * - Projects: 프로젝트 경험
 * 
 * 사이드 네비게이션으로 탭 전환 가능
 * 스크롤 시 자동으로 탭 변경 (Scrollspy)
 */
const Resume = () => {
  const [activeTab, setActiveTab] = useState('education')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  // 각 탭 콘텐츠의 ref
  const educationRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  
  // 스크롤 기반 탭 자동 변경 (Scrollspy) + Sticky 네비게이션
  useEffect(() => {
    const nav = document.querySelector('.resume-nav') as HTMLElement
    const navParent = nav?.parentElement as HTMLElement
    const section = document.querySelector('.resume-section') as HTMLElement
    
    if (!nav || !navParent || !section) return
    
    // 초기 너비 저장 (fixed일 때 사용)
    const originalWidth = navParent.offsetWidth
    
    const handleScroll = () => {
      const sectionRect = section.getBoundingClientRect()
      const navHeight = nav.offsetHeight
      const navParentRect = navParent.getBoundingClientRect()
      
      // Resume 섹션의 실제 콘텐츠 영역 (우측 컬럼) 확인
      const rightColumn = section.querySelector('.col-md-9') as HTMLElement
      if (!rightColumn) return
      
      const rightColumnRect = rightColumn.getBoundingClientRect()
      const rightColumnBottom = rightColumnRect.bottom
      
      // Sticky 효과 (JavaScript로 직접 구현)
      if (sectionRect.top <= 80 && rightColumnBottom > (80 + navHeight + 200)) {
        // 케이스 1: Resume 섹션 진행 중 - 좌측 패널 고정
        nav.style.position = 'fixed'
        nav.style.top = '80px'
        nav.style.width = `${originalWidth}px`
        nav.style.left = `${navParentRect.left}px`
        nav.style.transform = 'translateY(0)'
      } else if (sectionRect.top > 80) {
        // 케이스 2: Resume 섹션 시작 전 - 일반 흐름
        nav.style.position = 'relative'
        nav.style.top = '0'
        nav.style.width = ''
        nav.style.left = ''
        nav.style.transform = 'translateY(0)'
      } else {
        // 케이스 3: 우측 콘텐츠가 끝나가면 - 패널을 부드럽게 따라가도록
        // fixed 위치를 유지하되, 우측 콘텐츠가 끝나면 함께 올라감
        const distanceFromBottom = rightColumnBottom - (80 + navHeight + 200)
        
        if (distanceFromBottom < 0) {
          // 우측 콘텐츠가 네비 아래로 올라가는 중
          nav.style.position = 'fixed'
          nav.style.top = '80px'
          nav.style.width = `${originalWidth}px`
          nav.style.left = `${navParentRect.left}px`
          // transform으로 부드럽게 올라가기
          nav.style.transform = `translateY(${distanceFromBottom}px)`
        }
      }
      
      // Scrollspy: 각 섹션의 위치 확인
      const refs = [
        { id: 'education', ref: educationRef },
        { id: 'experience', ref: experienceRef },
        { id: 'skills', ref: skillsRef },
        { id: 'projects', ref: projectsRef },
      ]
      
      for (const { id, ref } of refs) {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveTab(id)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll) // 리사이즈 시에도 재계산
    handleScroll() // 초기 실행
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const tabs = [
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
  ]

  const skills = [
    { name: 'React', level: 90 },
    { name: 'jQuery', level: 85 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'WordPress', level: 70 },
    { name: 'SEO', level: 80 },
  ]
  
  // 탭 클릭 시 해당 섹션으로 스크롤
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
    const refs: Record<string, React.RefObject<HTMLDivElement>> = {
      education: educationRef,
      experience: experienceRef,
      skills: skillsRef,
      projects: projectsRef,
    }
    
    const targetRef = refs[tabId]
    if (targetRef.current) {
      // 부드러운 스크롤
      const offsetTop = targetRef.current.offsetTop
      window.scrollTo({
        top: offsetTop - 100, // 네비게이션 바 높이 고려
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="resume-section section" id="education-section">
      <div className="container">
        {/* sticky 작동을 위해 motion 제거, 일반 div 사용 */}
        <div ref={ref} className="resume-wrapper">
          <div className="row">
            {/* 사이드 네비게이션 */}
            <div className="col-md-3">
              <nav className="resume-nav">
              <ul>
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <a
                      href={`#${tab.id}`}
                      className={activeTab === tab.id ? 'active' : ''}
                      onClick={(e) => {
                        e.preventDefault()
                        handleTabClick(tab.id)
                      }}
                    >
                      {tab.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* 탭 컨텐츠 - 모든 탭을 렌더링 (스크롤 기반) */}
          <div className="col-md-9">
            {/* Education Tab */}
            <div className="tab-content" ref={educationRef} id="education">
              <h2 className="heading">Education</h2>
              
              <div className="resume-item">
                <div className="resume-icon">
                  <span>💡</span>
                </div>
                <div className="resume-text">
                  <span className="date">2010-2015</span>
                  <h3>컴퓨터 공학 & 전자 공학 복수 전공</h3>
                  <span className="position">Handong Global University</span>
                  <p>
                    전산 동아리 활동과 기숙사 생활을 통해, 함께 일하는 법을 배웠습니다. 
                    Computer Science 기초 지식을 4년간 탄탄히 쌓아 빠르고 올바른 방향으로 
                    성장할 수 있는 개발자가 되었습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Tab */}
            <div className="tab-content" ref={experienceRef} id="experience">
              <h2 className="heading">Work Experience</h2>
              
              <div className="resume-item">
                <div className="resume-icon">
                  <span>💡</span>
                </div>
                <div className="resume-text">
                  <span className="date">2019.09-2021.04 (1년 8개월)</span>
                  <h3>Full Stack Developer</h3>
                  <span className="position">주식회사 더라피스</span>
                  <p>동남아 스파 예약 서비스 Web 개발, 온라인 요가 수업 예약/결제 서비스 개발</p>
                  
                  <div className="tech-stack">
                    <strong className="text-primary">기술 스택</strong>
                    <p>ReactJS, Next.js, Typescript, Styled-components, AWS S3 static hosting</p>
                  </div>
                  
                  <div className="main-tasks">
                    <strong className="text-primary">주요 업무</strong>
                    <ul>
                      <li>React + typescript 기반 웹 서비스 개발/운영</li>
                      <li>디자인 시스템 도입을 위한 UI 컴포넌트 관리용 storybook 도입</li>
                      <li>SEO를 위한 Next.js 도입</li>
                      <li>Serverless 환경을 위한 s3 기반의 static hosting 구축</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Tab */}
            <div className="tab-content" ref={skillsRef} id="skills">
              <h2 className="heading">Skills</h2>
              
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h3>{skill.name}</h3>
                    <div className="progress-bar-container">
                      <motion.div
                        className="progress-bar"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      >
                        <span>{skill.level}%</span>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Projects Tab */}
            <div className="tab-content" ref={projectsRef} id="projects">
              <h2 className="heading">Projects</h2>
              
              <div className="resume-item">
                <div className="resume-icon">
                  <span>💡</span>
                </div>
                <div className="resume-text">
                  <span className="date">2019.09-2020.08</span>
                  <div className="project-header">
                    <h3>웰리스 여행 상품 예약 플랫폼 개발</h3>
                    <div className="project-links">
                      <a
                        href="https://github.com/congchu/portfolio-template-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-secondary"
                      >
                        Github
                      </a>
                      <a
                        href="/images/project_1_screenshot.png"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-secondary"
                      >
                        스크린샷
                      </a>
                      <a
                        href="https://www.wellytravel.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-secondary"
                      >
                        Link
                      </a>
                    </div>
                  </div>
                  <span className="position">주식회사 더라피스</span>
                  
                  <div className="project-details">
                    <p>
                      <strong className="text-dark">기술 스택: </strong>
                      React, Typescript, Next.js, Styled-Component, MobX
                    </p>
                    <p>
                      <strong className="text-dark">주요 기능: </strong>
                      회원 관리 및 SNS 로그인, 상품 리스트 확인, 상품 상세 정보 확인, 예약 관리, 결제
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Resume

