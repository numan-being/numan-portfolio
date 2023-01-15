import React from 'react'
import Typewriter from "typewriter-effect";
import './autotext.css';

const Autotext = () => {
  return (
    <div className="Autotext">
      <Typewriter
       onInit={(typewriter)=> {
        typewriter
        .pauseFor(1000)
        .typeString('Learning the art of web')
        .pauseFor(300)
        .deleteChars(3)
        .typeString('<strong><span style="color: #FFEA20;">web</span> Development!</strong>')
        .pauseFor(6000)
        .deleteAll()
        .pauseFor(1000)
        .start();
       }}
       options={{
        autoStart: true,
        loop: true,
       }}
       />
    </div>
  )
}

export default Autotext