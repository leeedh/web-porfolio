import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { projects, projectFilters } from '../lib/data'

/**
 * Projects 컴포넌트 - 프로젝트 포트폴리오
 * 
 * 주요 기능:
 * - 프로젝트 필터링 (전체/지도/3D/웹)
 * - 카드형 그리드 레이아웃
 * - 호버 효과와 3D tilt 애니메이션
 * - GitHub/Live 링크 버튼
 * - Intersection Observer를 사용한 스크롤 애니메이션
 */
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // 필터링된 프로젝트
  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  )

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-20 bg-background" id="projects">
      <div className="container mx-auto px-4">
        {/* 헤더 */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-lg tracking-wide uppercase">Projects</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2 mb-4">Featured Work</h2>
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
            지도와 공간데이터를 활용한 다양한 프로젝트들을 확인해보세요.
          </p>
        </motion.div>

        {/* 필터 탭 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {projectFilters.map((filter) => (
            <motion.button
              key={filter.key}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-primary text-white shadow-soft'
                  : 'bg-card text-muted hover:bg-primary hover:text-white border border-border'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* 프로젝트 그리드 */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              whileHover={{ 
                scale: 1.02,
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="bg-card/80 backdrop-blur-sm rounded-xl shadow-soft hover:shadow-large border border-border transition-all duration-300 overflow-hidden group"
            >
              {/* 프로젝트 썸네일 */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // 이미지 로드 실패 시 플레이스홀더 표시
                    const target = e.target as HTMLImageElement
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5NDk1OTciIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBQbGFjZWhvbGRlcjwvdGV4dD48L3N2Zz4='
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* 카테고리 뱃지 */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.category === 'map' ? 'bg-green-100 text-green-800' :
                    project.category === '3d' ? 'bg-blue-100 text-blue-800' :
                    project.category === 'web' ? 'bg-purple-100 text-purple-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {project.category.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* 프로젝트 정보 */}
              <div className="p-4">
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted text-sm leading-relaxed mb-3 line-clamp-2">
                  {project.desc}
                </p>

                {/* 태그 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-background text-muted text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 액션 버튼들 */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-secondary text-white text-center py-2 px-4 rounded-lg font-semibold text-sm hover:bg-secondary/90 transition-all duration-300 shadow-soft"
                  >
                    GitHub
                  </motion.a>
                  
                  {project.live !== '#' && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-primary text-white text-center py-2 px-4 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all duration-300 shadow-soft"
                    >
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 프로젝트가 없을 때 */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            className="text-center py-12"
          >
            <div className="text-muted text-lg">
              해당 카테고리의 프로젝트가 없습니다.
            </div>
          </motion.div>
        )}

        {/* 추가 정보 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto border border-border">
            <h3 className="text-2xl font-bold text-primary mb-4">더 많은 프로젝트를 확인하고 싶다면?</h3>
            <p className="text-muted mb-6">
              GitHub에서 모든 프로젝트 소스코드와 개발 과정을 확인할 수 있습니다.
            </p>
            <motion.a
              href="https://github.com/leeedh"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-secondary text-white px-8 py-3 rounded-xl font-semibold shadow-soft hover:shadow-glow transition-all duration-300"
            >
              View All Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
