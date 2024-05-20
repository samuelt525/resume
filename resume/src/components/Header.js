import React, {useState} from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import {Link} from 'react-scroll'
import './Header.css'

export default function Header(){
    return ( 
        <header className="fixed top-0 z-50 hidden w-full bg-neutral-900/50 p-3 backdrop-blur sm:block">
            <nav className="flex justify-end gap-x-8 flex-column p-x-2 m-x-2 content-between">
                <ul className="flex jusitfy-center gap-x-8">
                    <li className="nav-item">
                        <Link to="about" spy={true} offset={-64} smooth={true} className="font-bold text-xl text-neutral-100 "> About </Link>
                        </li>
                    <li className="nav-item">
                        <Link to="resume" spy={true} offset={-64} smooth={true} className="font-bold text-xl text-neutral-100 "> Resume  </Link>
                        </li>
                    <li className="nav-item">
                        <Link to="project experience" spy={true} offset={-64} smooth={true} className="font-bold text-xl text-neutral-100"> Project Experience </Link>
                        </li>
                    <li className="nav-item">
                        <Link to="testimonials" spy={true} offset={-64} smooth={true} className="font-bold text-xl text-neutral-100 "> Testimonials </Link> 
                        </li>
                    <li className="nav-item">
                        <Link to="contact" spy={true} offset={-64} smooth={true} className="font-bold text-xl text-neutral-100 "> Contact </Link>
                        </li>
                </ul>
                
            </nav>
        </header>
    )
}
