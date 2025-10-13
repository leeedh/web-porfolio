import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Blog.css'

/**
 * Blog 컴포넌트
 * 
 * 블로그 섹션:
 * - 블로그 포스트 카드 3개 표시
 * - 각 카드에 썸네일 이미지, 제목, 날짜, 작성자, 댓글 수 표시
 * - 카드 호버 시 애니메이션 효과
 */
const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const blogPosts = [
    {
      id: 1,
      title: 'Why Lead Generation is Key for Business Growth',
      date: 'Sept. 12, 2019',
      author: 'Admin',
      comments: 3,
      excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      image: '/images/image_1.jpg',
      link: '/single.html',
    },
    {
      id: 2,
      title: 'Why Lead Generation is Key for Business Growth',
      date: 'Sept. 12, 2019',
      author: 'Admin',
      comments: 3,
      excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      image: '/images/image_2.jpg',
      link: '/single.html',
    },
    {
      id: 3,
      title: 'Why Lead Generation is Key for Business Growth',
      date: 'Sept. 12, 2019',
      author: 'Admin',
      comments: 3,
      excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      image: '/images/image_3.jpg',
      link: '/single.html',
    },
  ]

  return (
    <section className="blog-section section" id="blog-section">
      <div className="container">
        <motion.div
          ref={ref}
          className="heading-section text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="big big-2">Blog</h1>
          <h2 className="mb-4">My Blog</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </motion.div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="blog-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <a href={post.link} className="blog-image">
                <div
                  className="image-wrapper"
                  style={{ backgroundImage: `url(${post.image})` }}
                ></div>
              </a>
              
              <div className="blog-content">
                <h3 className="blog-title">
                  <a href={post.link}>{post.title}</a>
                </h3>
                
                <div className="blog-meta">
                  <span className="date">{post.date}</span>
                  <a href="#" className="author">{post.author}</a>
                  <a href="#" className="comments">💬 {post.comments}</a>
                </div>
                
                <p className="blog-excerpt">{post.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog



