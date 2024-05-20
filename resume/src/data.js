
import heroImage from './images/hero.PNG'
import nbme from './images/nbme.png'
import sig from './images/sig.svg'
import wolf from './images/wolf.png'
import resume from './assets/resume.pdf'
import hero from './images/hero.PNG'
import {ArrowDownTrayIcon, MapIcon, CalendarIcon,FlagIcon,SparklesIcon,AcademicCapIcon,BuildingOffice2Icon} from '@heroicons/react/24/outline'
import { FaGithub, FaInstagram, FaLinkedin, FaPython, FaJava, FaReact, FaWpforms } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { AiOutlineDotNet, AiOutlineJavaScript } from "react-icons/ai";
import { SiFirebase, SiMongodb,SiPostgresql } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaFlag } from 'react-icons/fa'
import Skills from './pages/Resume/Skills';

export const HeroData = {
    imageSrc: heroImage,
    name: "I'm Samuel Tsui",
    description: (
        <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt tempor lobortis. Curabitur egestas, dolor vitae ultricies auctor, massa nisi tristique quam, quis fringilla diam eros rutrum leo. Sed faucibus lacus sit amet augue egestas lacinia. Integer finibus purus ac bibendum ultrices. Vivamus ante sem, dignissim sit amet dignissim vitae, elementum vitae lacus. Nam tincidunt pulvinar elit. Nam ac urna viverra, tempus est a, cursus tellus. Donec vitae sapien tincidunt, lobortis tortor sed, porttitor mauris. Vivamus in tellus maximus, dapibus sapien quis, convallis erat. Suspendisse non imperdiet nulla.  
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

export const EducationData = {
    university: "Drexel University",
    major:"Bachelor of Science in Computer Science",
    concentration: "Software & Security Concentration | Human-Computer Interaction Concentration",
    location: "Philadelphia, PA",
    graduation: "June 2023",
    gpa: "Cum Laude 3.58",
}
export const WorkExperienceData= [
    {
        company: "Susquehanna International Group, LLP: SIG",
        date: "September 2021 - March 2022",
        location: "Philadelphia, PA",
        role: "Software Developer Intern",
        responsibilities: [
            "Collaborated with four development teams to deliver 'NewsHound', a desktop application designed to provide immediate access to breaking news, facilitating swift stock executions by traders",
            "Responsible for over 120 end users, implementing quality-of-life features including filtering, sorting, notifications, date-time searches, regex searches, news queries, sound alerts, enhancing overall user experience",
            "Leveraged Devexpress’s WPF library and C# to create user-friendly and visually appealing user interfaces utilizing DataGrids, Dialogs, and Data Editors",
            "Web Scraped over 100 different news sites to parse key information such as article headers, contents, and stock tickers using Python and integrated the scraped data into the application's interface to provide users with a streamlined and efficient way to access and view news articles",
            "Published a NuGet package for .NET libraries and frameworks in C#, ensuring applications always stayed within the monitor’s dimensions",
        ],
        image: sig,
    },
    {
        company: "Belay (formally Wolf Financial)",
        date: "September 2020 - September 2021",
        location: "Philadelphia, PA",
        role: "Front-End Application Developer Intern",
        responsibilities: [
            "Developed and maintained a cross-platform (IOS, Android) mobile application 'Wolf Financial' using React Native and JavaScript, fostering a community of 2000 users for a dynamic space to discuss and share stock trades",
            "Implemented WebSockets and API endpoints using Plaid API facilitating real-time retrieval of stock and user data for user portfolios",
            "Designed user interfaces and prototypes on Figma, collaborating with stakeholders and developers to ensure that the designs aligned",
            "Implemented screens, components, stock graphs, and SVGs from concepts to deployment, utilizing React libraries and CSS to create a dynamic application that provides real-time stock market data visualization and analysis",
        ],
        image: wolf,
    },
    {
        company: "National Board of Medical Examiner",
        date: "September 2019 - March 2020",
        location: "Philadelphia, PA",
        role: "PC Support Analyst",
        responsibilities: [
            "Proficient in diagnosing and resolving hardware, software, and network issues to ensure uninterrupted workflow for end-users",
            "Experienced in installing and updating applications, including Microsoft Office, specialized software, and antivirus programs using Microsoft SCCM",
            "Used Wireshark to analyze packet-level losses for network issues, identifying problems, and optimizing network performance",
            "Managed Active Directory services, including user and group management, organizational unit design, and Group Policy implementation",
            "Spearheaded the creation of scripts to automate routines using Powershell and Python: Company Wide BIOS Update Scripts, Selenium and Pandas to input hardware data from Excel sheet to online database, and renaming over 100 loaner laptops"
        ],
        image: nbme
    },
]

export const SkillsData = [
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
                flag: '🇺🇸',
                level: 10,
            },
            {
                name: 'Chinese',
                flag: '🇨🇳',
                level: 4,
            },
            {
                name:'Korean',
                flag: '🇰🇷',
                level: 6,
            }]
        },


]
export const SocialData = [
    {label: 'LinkedIn', Icon: FaLinkedin, href: 'https://www.linkedin.com/in/samuel-tsui-7730001b9/'},
    {label: 'Github', Icon: FaGithub, href: 'https://github.com/samuelt525'},
    {label: 'Instagram', Icon: FaInstagram, href: 'https://www.instagram.com/samuelt525/'},
]
export const aboutData = {
    profileImageSrc: hero,
    description: ``,
    aboutItems: [
      {label: 'Location', text: 'Philadelphia, PA', Icon: MapIcon},
      {label: 'Age', text: '24', Icon: CalendarIcon},
      {label: 'Nationality', text: 'Taiwanese / Korean', Icon: FlagIcon},
      {label: 'Interests', text: 'Swimming, Rock Climbing, Gaming', Icon: SparklesIcon},
      {label: 'Study', text: 'Drexel University', Icon: AcademicCapIcon},
      {label: 'Employment', text: 'NA', Icon: BuildingOffice2Icon},
    ],
  };

export const TestimonialData = [
    {
        role: "Customer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt tempor lobortis. Curabitur egestas, dolor vitae ultricies auctor, massa nisi tristique quam, quis fringilla diam eros rutrum leo. Sed faucibus lacus sit amet augue egestas lacinia. Integer finibus purus ac bibendum ultrices. Vivamus ante sem, dignissim sit amet dignissim vitae, elementum vitae lacus. Nam tincidunt pulvinar elit. Nam ac urna viverra, tempus est a, cursus tellus. Donec vitae sapien tincidunt, lobortis tortor sed, porttitor mauris. Vivamus in tellus maximus, dapibus sapien quis, convallis erat. Suspendisse non imperdiet nulla. ",
        image: hero,
        person: "Dorothy Li",
        actions: [
            {

            }
        ]
    },
    {
        role: "Manager",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt tempor lobortis. Curabitur egestas, dolor vitae ultricies auctor, massa nisi tristique quam, quis fringilla diam eros rutrum leo. Sed faucibus lacus sit amet augue egestas lacinia. Integer finibus purus ac bibendum ultrices. Vivamus ante sem, dignissim sit amet dignissim vitae, elementum vitae lacus. Nam tincidunt pulvinar elit. Nam ac urna viverra, tempus est a, cursus tellus. Donec vitae sapien tincidunt, lobortis tortor sed, porttitor mauris. Vivamus in tellus maximus, dapibus sapien quis, convallis erat. Suspendisse non imperdiet nulla. ",
        image: hero,
        person: "Michael Kassabov",
        actions: []
    },
    {
        role: "Classmate",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt tempor lobortis. Curabitur egestas, dolor vitae ultricies auctor, massa nisi tristique quam, quis fringilla diam eros rutrum leo. Sed faucibus lacus sit amet augue egestas lacinia. Integer finibus purus ac bibendum ultrices. Vivamus ante sem, dignissim sit amet dignissim vitae, elementum vitae lacus. Nam tincidunt pulvinar elit. Nam ac urna viverra, tempus est a, cursus tellus. Donec vitae sapien tincidunt, lobortis tortor sed, porttitor mauris. Vivamus in tellus maximus, dapibus sapien quis, convallis erat. Suspendisse non imperdiet nulla. ",
        image: hero,
        person: "Sean Rhee",
        actions: []

    },

]