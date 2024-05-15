
import heroImage from './images/hero.PNG'
import resume from './assets/resume.pdf'
import {ArrowDownTrayIcon} from '@heroicons/react/24/outline'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const SectionId = {
    Hero: 'hero',
    About: 'about',
    Contact: 'contact',
    Resume: 'resume',
    Portfolio: 'portfolio',
    Skills: 'skills',
    Stats: 'Stats',
    Testimonials: 'Testimonials'
}

export const heroData = {
    imageSrc: heroImage,
    name: "I'm Samuel Tsui",
    description: (
        <p>
            I am a Full Stack Software Engineer trying to land my first Job in the Corporate World.
            Thank you for clicking on my site!
        </p>
    ),
    actions: [{
        href: resume,
        text: 'Resume',
        primary: true,
        Icon: ArrowDownTrayIcon,
    },
    {
        href: 'Projects',
        text: 'Projects'
    },
    {
        href: 'Contacts',
        text: 'Contacts'
    }]
}


export const socialData = [
    {label: 'LinkedIn', Icon: FaLinkedin, href: 'https://www.linkedin.com/in/samuel-tsui-7730001b9/'},
    {label: 'Github', Icon: FaGithub, href: 'https://github.com/samuelt525'},
    {label: 'Instagram', Icon: FaInstagram, href: 'https://www.instagram.com/samuelt525/'},
]