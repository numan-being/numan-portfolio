import React from 'react'
import './testimonials.css'
import avtr1 from '../../assets/avatar1.jpg'
import avtr2 from '../../assets/avatar2.jpg'
import avtr3 from '../../assets/avatar3.jpg'
import { Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: avtr1,
    author_name: '~ Steve Jobs',
    quote: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you."
  },
  {
    avatar: avtr2,
    author_name: '~ Mark Zuckerberg',
    quote: "If you want to achieve something, you need to have the courage to take risks."
  },
  {
    avatar: avtr3,
    author_name: '~ Elon Musk',
    quote: "If something is important enough, even if the odds are against you, you should still do it."
  },
  {
    avatar: avtr1,
    author_name: '~ Steve Jobs',
    quote: "The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it"
  },
  
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Quotes to get inspired from</h5>
      <h2>Quotes</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, author_name, quote}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt=''/>
                </div>
                <h5 className='author_name'>{author_name}</h5>
                  <small className='quote'>{quote}</small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>

    </section>
  )
}

export default Testimonials