import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaWhatsapp} from 'react-icons/fa'
import {useRef as UseRef} from "react";
import emailjs from 'emailjs-com'

const contact = () => {
  const form = UseRef("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zz3etxs', 'template_hiva7zp', form.current, '-CDr8dtobN8So2yiw')
      
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>numanahmedh@gmail.com</h5>
            <a href="mailto:numanahmedh@gmail.com" target="_blank" rel='noreferrer'>Send a message</a>
          </article>

          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 7349416278</h5>
            <a href="https://wa.me/917349416278" target="_blank" rel='noreferrer'>Send a message</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact