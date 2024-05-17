
import heroImage from './images/hero.PNG'
import resume from './assets/resume.pdf'
import {ArrowDownTrayIcon} from '@heroicons/react/24/outline'
import { FaGithub, FaInstagram, FaLinkedin, FaPython, FaJava, FaReact, FaWpforms } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { AiOutlineDotNet, AiOutlineJavaScript } from "react-icons/ai";
import { SiFirebase, SiMongodb,SiPostgresql } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import Skills from './pages/Resume/Skills';


export const SectionId = {
    Hero: 'hero',
    About: 'about',
    Contact: 'contact',
    Resume: 'resume',
    Skills: 'skills',
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

export const skillsData = [
    {
        name: 'Programming lanugages',
        skills: [
            {
                name: 'JavaScript',
                Icon: AiOutlineJavaScript,
                level: 7,
            },
            {
                name: 'Python',
                Icon: FaPython,
                level: 8,
            },
            {
                name: "C#",
                Icon: FaJava,
                level: 7   
            },
            {
                name: "Java",
                Icon: FaJava,
                level: 6,
            }
        ]
    },
    {
        name:'Frameworks',
        skills: [
            {
                name: 'React',
                Icon: FaReact,
                level: 7,
            },
            {
                name: 'React-Native',
                Icon: FaReact,
                level: 7,
            },
            {
                name: 'WPF',
                Icon: FaWpforms,
                level: 7,
            },
        ]
    },
    {
        name:'Database',
        skills: [
            {
                name: 'MongoDB',
                Icon: SiMongodb,
                level: 8
            },
            {
                name: 'PostgreSQL',
                Icon: SiPostgresql,
                level: 6,
            },
            {
                name: 'FireBase',
                Icon: SiFirebase,
                level: 6,
            },
        ]
    },
    { 
        name: 'Spoken Languages',
        skills: [
            {
                name: 'English',
                Icon: FaJava,
                level: 10,
            },
            {
                name: 'Chinese',
                Icon: FaJava,
                level: 4,
            },
            {
                name:'Korean',
                Icon: FaJava,
                level: 6,
            }]
        },


]
export const socialData = [
    {label: 'LinkedIn', Icon: FaLinkedin, href: 'https://www.linkedin.com/in/samuel-tsui-7730001b9/'},
    {label: 'Github', Icon: FaGithub, href: 'https://github.com/samuelt525'},
    {label: 'Instagram', Icon: FaInstagram, href: 'https://www.instagram.com/samuelt525/'},
]