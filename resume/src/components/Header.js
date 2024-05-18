import React from 'react'
import {Link, Element} from 'react-scroll'

export default function Header(){

    return ( 
        <header className="fixed top-0 z-50 hidden w-full bg-neutral-900/50 p-3 backdrop-blur sm:block">
            <nav className="flex justify-center gap-x-8 flex-column p-x-2 m-x-2 content-between">
                <Link to="About" offset={-64} smooth={true} className="font-bold text-xl text-neutral-100 "> About </Link>
                <Link to="Resume" offset={-64} smooth={true} className="font-bold text-xl text-neutral-100 "> Resume  </Link>
                <Link to="Project Experience" offset={-64} smooth={true} className="font-bold text-xl text-neutral-100"> Project Experience </Link>
                <Link to="Testimonials" offset={-64} smooth={true} className="font-bold text-xl text-neutral-100 "> Testimonials </Link> 
                <Link to="Contact" offset={-64} smooth={true} className="font-bold text-xl text-neutral-100 "> Contact </Link>
            </nav>
        </header>
    )
}
