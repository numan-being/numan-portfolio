import React from 'react'
import './footer.css'
import {AiFillTwitterSquare, AiFillLinkedin, AiFillGithub} from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
    <div className='footer__copyright'>
      <small>&copy; Numan Ahmed.</small>
    </div>
    {/* <div className='footer__socials'>
      <a href='https://twitter.com/numanahmedh' target="_blank" rel="noreferrer"><AiFillTwitterSquare/></a>
      <a href='https://www.linkedin.com/in/numan-being/' target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
      <a href='https://github.com/numan-being' target="_blank" rel="noreferrer"><AiFillGithub/></a>
    </div> */}

    
    </footer>
  )
}

export default Footer