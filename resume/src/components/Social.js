import React from 'react'
import { socialData } from '../data'
export default function Social() {

    return (
    <>
        {socialData.map(({label, Icon, href}) => (
            <a href={href} aria-label='label'
            className='-m-1.5 rounded-md p-1.5 transition-all duration-300 
            hover:text-orange-500 focus:outline-none 
            focus:ring-2 focus:ring-orange-500  sm:-m-3 sm:p-3"'>
                <Icon className="h-8 w-8 align-baseline sm:h-6 sm:w-6" />
            </a>
        ))}
    </>
  )
}
