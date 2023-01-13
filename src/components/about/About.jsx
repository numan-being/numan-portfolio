import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt='About'/>
          </div>
        </div>

        <div className='about__content'>
          {/* <div className="about__cards">
            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ years Working Experience</small>
            </article>

            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ years Working Experience</small>
            </article>

          </div> */}

          <p>
            Hi there! I am Numan Ahmed, a 22-year-old Web developer, and an engineering graduate who enjoys learning, coding, and building software.
            As a programmer, I am constantly searching for new challenges and ways to push the limits of what is possible with code. I have a passion for solving problems and creating innovative solutions that make a real difference. 
          </p>
          <p>
            I am always looking for new opportunities to learn and grow as a developer, and I am excited to see what the future holds. Thank you for visiting my portfolio. Feel free to reach out if you have any questions or would like to collaborate on a project.
          </p>

          <a href='#contact' className='btn btn-primary'>let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About