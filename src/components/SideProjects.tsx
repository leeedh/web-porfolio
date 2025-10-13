import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './SideProjects.css'

/**
 * SideProjects 컴포넌트
 * 
 * 사이드 프로젝트 섹션:
 * - 그리드 레이아웃으로 프로젝트 카드 표시
 * - 호버 시 오버레이와 프로젝트 정보 표시
 * - 각 프로젝트는 배경 이미지와 링크를 포함
 */
const SideProjects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      id: 1,
      title: 'QPI - 소개팅 서비스 소개 페이지 개발',
      description: 'UI/UX 디자인부터 웹 호스팅까지 전체 영역을 담당하였습니다.',
      image: '/images/side-project-1.png',
      link: 'https://qpi.kr/',
    },
    {
      id: 2,
      title: 'Branding & Illustration Design',
      description: 'Web Design',
      image: '/images/work-2.jpg',
      link: '#',
    },
    {
      id: 3,
      title: 'Branding & Illustration Design',
      description: 'Web Design',
      image: '/images/work-3.jpg',
      link: '#',
    },
    {
      id: 4,
      title: 'Branding & Illustration Design',
      description: 'Web Design',
      image: '/images/work-4.jpg',
      link: '#',
    },
    {
      id: 5,
      title: 'Branding & Illustration Design',
      description: 'Web Design',
      image: '/images/work-5.jpg',
      link: '#',
    },
    {
      id: 6,
      title: 'Branding & Illustration Design',
      description: 'Web Design',
      image: '/images/work-6.jpg',
      link: '#',
    },
  ]

  return (
    <section className="side-projects-section section" id="side-projects-section">
      <div className="container-fluid">
        <motion.div
          ref={ref}
          className="heading-section text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="big big-2">Projects</h1>
          <h2 className="mb-4">Side Projects</h2>
          <p>꾸준히 사이드 프로젝트를 진행하며, 다양한 분야의 기술 스택을 경험해왔습니다.</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <div
                  className="project-image"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="project-overlay"></div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <span>{project.description}</span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SideProjects



