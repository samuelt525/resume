import React from 'react'
import Social from '../components/Social'

function Footer() {
  return (
    <div>
        <div className="flex flex-col justify-center p-2 my-2 text-gray-500">
            <h3> Designed and coded by Samuel Tsui. May 26, 2024 Version WIP </h3>
            <div className="flex justify-center gap-x-3 mt-4" >
                <Social></Social>
            </div>
        </div>
    </div>
  )
}

export default Footer