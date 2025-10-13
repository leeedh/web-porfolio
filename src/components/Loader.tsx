import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Loader.css'

/**
 * Loader 컴포넌트
 * 
 * 페이지 로딩 스피너:
 * - 페이지 첫 로드 시 전체 화면 로더 표시
 * - 1초 후 자동으로 사라짐
 * - 원형 애니메이션 효과
 */
const Loader = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 페이지 로드 후 1초 뒤에 로더 숨김
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="loader">
            <svg className="circular" viewBox="25 25 50 50">
              <circle
                className="path"
                cx="50"
                cy="50"
                r="20"
                fill="none"
                strokeWidth="4"
                strokeMiterlimit="10"
              />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader



