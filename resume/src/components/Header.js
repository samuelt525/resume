import React from 'react'
import {Link, Element} from 'react-scroll'

export default function Header(){
    return ( 
        <header className="header">
            <nav className = "NavBar">
                <ul>
                    <li>
                        <Link to="Hero" smooth={true} duration={500}>Hero</Link>
                    </li>
                    <li>
                        <Link to="About" smooth={true} duration={500}> About </Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}
