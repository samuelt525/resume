import React from 'react'
import Section from '../layouts/Section'
import {Swiper, SwiperSlide} from "swiper/react"
import {Mousewheel, EffectCoverflow, Pagination} from 'swiper/modules'
import TestimonialCard from '../components/TestimonialCard'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { TestimonialData } from '../data'

export default function Testimonials() {
  return (
    <Section name='testimonials' className="">  
    <h2 className="text-2xl font-bold text-black text-left">Testimonials</h2>
        <div>
            <Swiper
            pagination={{
            dynamicBullets: true,
            clickable: true,
            }}
            
            effect={'coverflow'}
            speed={1000}
            coverflowEffect={{slideShadows: false}}
            mousewheel={{ forceToAxis: true, sensitivity: .1 }}  // Enable trackpad scrolling
            modules={[Pagination, Mousewheel, EffectCoverflow]}
            className=""
            >
          {TestimonialData.map((data, index) => (
            <SwiperSlide className='p-8' key={`slide${index}`}>
              <TestimonialCard testimonial={data} key={index}/>
            </SwiperSlide>
          ))}

        </Swiper>
      
        </div>
    </Section>
  )
}
