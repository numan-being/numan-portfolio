import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiBookBookmark,BiMessageSquareDetail} from 'react-icons/bi'
import {RiContactsLine} from 'react-icons/ri'
import {MdDesignServices} from 'react-icons/md'

const Nav = () => {
  return (
    <nav>
      <a href='#'><AiOutlineHome/></a>
      <a href='#about'><RiContactsLine/></a>
      <a href='#experience'><BiBookBookmark/></a>
      <a href='#services'><MdDesignServices/></a>
      <a href='#contact'><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav