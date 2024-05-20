import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import { TestimonialData } from '../data'

function Card({testimonial}) {
  const {role, image, person, description } = testimonial
  return (
    <div className="flex flex-row">
      <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
        <FaQuoteLeft></FaQuoteLeft> 
        <div className="relative h-16 w-16 overflow-hidden rounded-full md:h-24 md:w-24">
              <img className="h-full w-full object-cover" src={image} />
        </div>
      </div>
      <div className="flex flex-col px-10">
        <div className="flex flex-row mx-10 gap-x-1">
          <h2 className="text-xl font-bold justify-center"> {person} </h2>
          <h2 className="text-xl justify-center"> • </h2>
          <h2 className="text-m italic justify-center"> {role} </h2>
        </div>
        <div className="flex">
          {description}
        </div>

      </div>



    </div>
  )
}

export default Card