import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: '1',
    github: 'https://github.com',
    demo: 'https:google.com'
  },
  {
    id: 2,
    image: IMG1,
    title: '2',
    github: 'https://github.com',
    demo: 'https:google.com'
  },
  {
    id: 3,
    image: IMG1,
    title: '3',
    github: 'https://github.com',
    demo: 'https:google.com'
  },
]






const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo})=> {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
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