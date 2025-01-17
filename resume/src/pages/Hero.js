import React from "react";
import classNames from "classnames";
import { HeroData } from "../data";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Section from "../layouts/Section";
import Social from "../components/Social";
import { Link } from "react-scroll";
import background from "../images/background.webp";
function Hero() {
    const { actions } = HeroData;
    return (
        <Section sectionId="hero" noPadding={true}>
            <div className="relative flex h-screen w-full items-center justify-center flex-row">
                <img
                    src={background}
                    className="absolute z-0 h-full w-full object-cover"
                />
                <div className="relative z-10 flex flex-col items-center shadow-2xl rounded-md p-8">
                    <h1 className="text-4xl font-bold text-gray-950 sm:text-5xl lg:text-7xl">
                        Hello, I'm Samuel Tsui
                    </h1>
                    <p>
                        <div className="flex flex-col justify-center items-center text-gray-950 text-xl">
                            <p>
                                A Front End Developer & Software Engineer. Previously worked at Susquehanna International Group, and National Board of Medical Examiners,  
                            </p>
                        </div>
                    </p>

                    <div className="flex flex-row p-4">
                    <a className="px-4 py-2 font-semibold text-sm mx-2 rounded-md shadow-sm text-white
                                transition ease-in-out delay-150 bg-blue-700 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300" href={actions[0].href} >
                                    {actions[0].text}
                                </a>
                                <Link className="px-4 py-2 font-semibold text-sm mx-2 rounded-md shadow-sm text-white
                                transition ease-in-out delay-150 bg-blue-700 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300" to={actions[1].href}
                                offset={-50}
                                smooth={true}
                                duration={500}>
                                    {actions[1].text}
                                </Link>
                                <Link className="px-4 py-2 font-semibold text-sm mx-2 rounded-md shadow-sm text-white
                                
                                transition ease-in-out delay-150 bg-blue-700 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300" 
                                offset={-50}
                                smooth={true}
                                duration={500}
                                to={actions[2].href} >
                                    {actions[2].text}
                                </Link>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-6 flex justify-center">
                    <Link
                        to="about"
                        offset={-50}
                        smooth={true}
                        duration={500}
                        className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
                    >
                        <ChevronDownIcon className="h-6 w-6 bg-white sm:h-6 sm:w-6/" />
                    </Link>
                </div>
            </div>
        </Section>
    );
}
export default Hero;
