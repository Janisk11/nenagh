import React from 'react'
import Title from '../uiComponents/title/title'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import './eveCarousel.css'

import onam from '../../assets/events/onam.png'
import easter from '../../assets/events/easter.png'
import sports from '../../assets/events/sports.png'
import christmas from '../../assets/events/christmas.png'

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
const eventsData = [
  {
    tag: 'onam',
    preview: onam,
  },
  {
    tag: 'Christmas',
    preview: christmas,
  },
  {
    tag: 'easter-vishu',
    preview: easter,
  },
  {
    tag: 'sports',
    preview: sports,
  },
]
const EveCarousel = () => {
  return (
    <div className="wrapper">
      <Title title="EVENTS" />
      <Swiper
        loop={true}
        spaceBetween={45}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
        breakpoints={{
          // When the viewport is 640px or larger
          640: {
            spaceBetween: 40, // Set space between slides for small screens
          },
          // When the viewport is 768px or larger
          768: {
            spaceBetween: 45, // Set space between slides for tablets
          },
          // When the viewport is 1024px or larger
          1024: {
            spaceBetween: 50, // Set space between slides for larger screens
          },
          // When the viewport is 1210px or larger
          1210: {
            spaceBetween: 55, // Set space between slides for larger screens
          },
        }}
      >
        {eventsData.map((event, index) => {
          return (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div className={`${isActive ? 'active' : 'not-active'}`}>
                  <img src={event.preview} alt={event.tag} />
                  <p className="overlay">{event.tag}</p>
                </div>
              )}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default EveCarousel
