import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiBookBookmark,BiMessageSquareDetail} from 'react-icons/bi'
import {RiContactsLine} from 'react-icons/ri'
import {SiWheniwork} from 'react-icons/si'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><RiContactsLine/></a>
      <a href='#experience'onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookBookmark/></a>
      <a href='#portfolio'onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><SiWheniwork/></a>
      <a href='#contact'onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav