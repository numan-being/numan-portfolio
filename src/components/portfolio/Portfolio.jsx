import React from 'react'
import './portfolio.css'


import IMG1 from '../../components/portfolio/Youtube.webp'
import IMG2 from '../../components/portfolio/vaolrant.jpg'
import IMG3 from '../../components/portfolio/SSlodge.png'

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
    title: 'Valorant',
    github: 'https://github.com',
    demo: 'https:google.com',
    description: 'A landing page showcasing the characters and maps in Valorant, a competitive tactical FPS game. The page should feature a responsive grid layout and support both light and dark modes.'
  },
  {
    id: 3,
    image: IMG3,
    title: 'SS LODGE',
    github: 'https://github.com/numan-being/lodge',
    demo: 'https://lodge-blush.vercel.app/',
    description: 'A visually appealing and user-friendly website for a lodge located in Chikmagalur, featuring stunning imagery, detailed information on accommodations and activities, and a responsive design.'
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