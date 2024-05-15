
import heroImage from './images/hero.PNG'
import ArrowDownTrayIcon from '@heroicons/react'

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
        href: '/resume/src/assets/resume.pdf',
        text: 'Resume',
        primary: true,
        icon: ArrowDownTrayIcon,
    }]

}