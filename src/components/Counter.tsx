import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import './Counter.css'

/**
 * Counter 컴포넌트
 * 
 * 통계 카운터 섹션:
 * - 4개의 통계 카드 (코딩 일수, 완료 프로젝트, 고객, 커피)
 * - 숫자 카운터 애니메이션
 * - Intersection Observer로 화면에 보일 때 애니메이션 시작
 */

interface CounterItemProps {
  end: number
  label: string
  index: number
  inView: boolean
}

// 개별 카운터 컴포넌트
const CounterItem = ({ end, label, index, inView }: CounterItemProps) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    // 카운터 애니메이션 로직
    let startTime: number | null = null
    const duration = 2000 // 2초 동안 애니메이션

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / duration

      if (progress < 1) {
        setCount(Math.floor(end * progress))
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [inView, end])

  return (
    <motion.div
      className="col-md-3"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="counter-card shadow">
        <strong className="counter-number">{count}</strong>
        <span className="counter-label">{label}</span>
      </div>
    </motion.div>
  )
}

const Counter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const counters = [
    { end: 365, label: '코딩한 일수' },
    { end: 100, label: 'Complete Projects' },
    { end: 100, label: 'Happy Customers' },
    { end: 50, label: 'Cups of coffee' },
  ]

  return (
    <section className="counter-section section" id="section-counter" ref={ref}>
      <div className="container">
        <div className="row counter-row">
          {counters.map((counter, index) => (
            <CounterItem
              key={index}
              end={counter.end}
              label={counter.label}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Counter




