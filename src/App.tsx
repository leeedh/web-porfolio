import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Counter from './components/Counter'
import Resume from './components/Resume'
import SideProjects from './components/SideProjects'
import Blog from './components/Blog'
import Hire from './components/Hire'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import './App.css'

function App() {
  useEffect(() => {
    // 페이지 로드 시 스크롤 위치 초기화
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Counter />
      <Resume />
      <SideProjects />
      <Blog />
      <Hire />
      <Contact />
      <Footer />
    </div>
  )
}

export default App



