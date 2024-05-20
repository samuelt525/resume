import React from 'react'
import Section from '../layouts/Section'
import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation, Pagination, Scrollbar} from 'swiper/modules'
import Card from '../components/Card'
import 'swiper/css'
import 'swiper/css/pagination';
import { TestimonialData } from '../data'

export default function Testimonials() {
  return (
    <Section name='testimonials' className="bg-blue-500">
        <div>
            <Swiper
            pagination={{
            dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="bg-orange-500"
            >
          {TestimonialData.map((data, index) => (
            <SwiperSlide className='p-8'>
              <Card testimonial={data} key={index}/>
            </SwiperSlide>
          ))}

        </Swiper>
      
        </div>
    </Section>
  )
}
