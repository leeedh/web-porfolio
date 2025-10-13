import './Footer.css'

/**
 * Footer 컴포넌트
 * 
 * 푸터 섹션:
 * - 저작권 정보 표시
 * - 템플릿 제작자 크레딧
 */
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>
            Copyright &copy; {currentYear} All rights reserved | This template is made with{' '}
            <span className="heart">❤️</span> by{' '}
            <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">
              Colorlib
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer



