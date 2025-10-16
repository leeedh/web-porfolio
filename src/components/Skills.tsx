import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '../lib/data'

/**
 * Skills 컴포넌트 - 기술 스택 표시
 * 
 * 주요 기능:
 * - 카테고리별 기술 스택 그룹화
 * - 칩 형태의 기술 태그
 * - 호버 효과와 애니메이션
 * - Intersection Observer를 사용한 스크롤 애니메이션
 */
const Skills = () => {
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
        staggerChildren: 0.1
      }
    }
  }

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-20 bg-background" id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-lg tracking-wide uppercase">Skills</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2 mb-4">Technical Expertise</h2>
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
            지도와 공간데이터를 중심으로 한 풀스택 개발 기술 스택입니다.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              variants={staggerItem}
              className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-soft hover:shadow-medium border border-border transition-all duration-300"
            >
              {/* 카테고리 제목 */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {skillGroup.category}
                </h3>
                <div className="w-12 h-1 bg-primary rounded-full"></div>
              </div>

              {/* 기술 스택 칩들 */}
              <div className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.5 + (index * 0.1) + (skillIndex * 0.05) 
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`inline-block px-4 py-2 rounded-lg text-sm font-medium border ${skillGroup.color} transition-all duration-300 cursor-default hover:shadow-soft`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>

              {/* 카테고리별 특별 아이콘 */}
              <div className="mt-6 flex justify-center">
                {skillGroup.category === 'Frontend' && (
                  <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                )}
                {skillGroup.category === 'Geo/3D' && (
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                )}
                {skillGroup.category === 'Backend/DB' && (
                  <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                )}
                {skillGroup.category === 'Infra/Etc' && (
                  <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 추가 정보 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 shadow-soft border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">지도 기반 개발 전문성</h3>
            <p className="text-muted text-base sm:text-lg leading-relaxed mb-6">
              CesiumJS, Mapbox GL JS, Three.js를 활용한 3D 지도 시각화와 
              PostgreSQL PostGIS를 통한 공간 데이터 처리에 특화되어 있습니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">6+</div>
                <div className="text-sm text-muted">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24+</div>
                <div className="text-sm text-muted">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted">Map-based Apps</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
