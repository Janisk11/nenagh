import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './partners.css'

// Assets
import Partner01 from '../../assets/partners/partner01.svg'
import Partner02 from '../../assets/partners/partner02.svg'
import Partner03 from '../../assets/partners/partner03.svg'
import Partner04 from '../../assets/partners/partner04.svg'
import Partner05 from '../../assets/partners/partner05.svg'
import Partner06 from '../../assets/partners/partner06.svg'

const partners = [
  { preview: Partner01, id: '1' },
  { preview: Partner02, id: '2' },
  { preview: Partner03, id: '3' },
  { preview: Partner04, id: '4' },
  { preview: Partner05, id: '5' },
  { preview: Partner06, id: '6' },
]

const MutipleSlidesPerView = () => {
  const params = {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    breakpoints: {
      1200: { slidesPerView: 6, spaceBetween: 0 },
      1024: { slidesPerView: 5, spaceBetween: 5 },
      768: { slidesPerView: 4, spaceBetween: 0 },
      640: { slidesPerView: 3, spaceBetween: 5 },
      320: { slidesPerView: 2, spaceBetween: 5 },
    },
  }

  return (
    <Swiper {...params}>
      {partners.map((partner) => (
        <SwiperSlide className="partner-box flex-center" key={partner.id}>
          <img src={partner.preview} alt="partner" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

const Partners = () => (
  <div id="partners" className="wrapper">
    <MutipleSlidesPerView />
  </div>
)

export default Partners
