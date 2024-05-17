import React from 'react'
import {Link, Element} from 'react-scroll'

export default function Header(){
    //'-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100';
    return ( 
        <header className="fixed top-0 z-50 hidden w-full bg-neutral-900/50 p-4 backdrop-blur sm:block">
            <nav className="flex justify-center gap-x-8 flex-column p-x-2 m-x-2 content-between">
                <Link to="About" offset={-64} smooth={true} className="font-bold text-2xl text-neutral-100 "> About </Link>
                <Link to="Work Experience" offset={-64} smooth={true}> Work Experience </Link>
                <Link to="Project Experience" offset={-64} smooth={true}> Project Experience </Link>
                <Link to="Skills"  offset={-64} smooth={true}> Skills </Link> 
                <Link to="Testimonials" offset={-64} smooth={true}> Testimonials </Link> 
                <Link to="Contact" offset={-64} smooth={true}> Contacts </Link>
            </nav>
        </header>
    )
}
