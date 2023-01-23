import React from 'react'
import './portfolio.css'
import IMG2 from '../../assets/portfolio.jpg'
import IMG1 from '../../components/portfolio/Youtube.webp'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Youtube UI',
    github: 'https://github.com/numan-being/youtube_clone_ui',
    demo: 'https://youtube-clone-ui-ochre.vercel.app/',
    description: 'This YouTube UI clone is a replica of the popular video-sharing platform, YouTube. The layout and design of the clone closely mimics that of the original YouTube platform.'
  },
  {
    id: 2,
    image: IMG2,
    title: '2',
    github: 'https://github.com',
    demo: 'https:google.com',
    description: ''
  },
  {
    id: 3,
    image: IMG2,
    title: '3',
    github: 'https://github.com',
    demo: 'https:google.com',
    description: ''
  },
]






const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo, description})=> {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="p-tag">
                  <p>{description}</p>
                </div>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer" >Live Demo</a>
                </div>
              </article>
            )
          })
        }
  
      </div>
    </section>
  )
}

export default Portfolio