import React from "react";
import classNames from "classnames";
import { HeroData } from "../data";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Section from "../layouts/Section";
import Social from "../components/Social";
import { Link } from "react-scroll";
import background from "../images/924472.webp";
function Hero() {
    const { actions } = HeroData;
    return (
        <Section sectionId="hero" noPadding={true}>
            <div className="relative flex h-screen w-full items-center justify-center flex-row">
                {/* <img
                    src={background}
                    className="absolute z-0 h-full w-full object-cover"
                /> */}
                <div className="relative z-10 flex flex-col items-center shadow-2xl rounded-md p-8">
                    <h1 className="text-4xl font-bold text-gray-950 sm:text-5xl lg:text-7xl">
                        I'm Samuel Tsui
                    </h1>
                    <p>
                        <div className="flex flex-col justify-center items-center text-gray-950 text-xl">
                            <p>
                                Hello, Thanks for clicking onto my newly created
                                site 5/15.
                                Last Updated: 5/22
                            </p>
                        </div>
                    </p>
                    <div className="flex flex-row m-2 gap-4">
                        <Social />
                    </div>
                    <div className="flex flex-row p-4">
                        {actions.map(({ href, text, primary, Icon }, index) =>
                            primary ? (
                                <a
                                    className={classNames(
                                        "flex justify-center m-1 gap-x-2 py-2 rounded-md border-2 bg-none text-sm font-medium text-g ring-offset-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base",
                                        primary
                                            ? "border-orange-500 ring-orange-500"
                                            : "border-white ring-white",
                                        Icon ? "px-4" : "px-3"
                                    )}
                                    href={href}
                                    key={index}
                                >
                                    {text}
                                    {Icon && (
                                        <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                                    )}
                                </a>
                            ) : (
                                <Link
                                    to={href}
                                    offset={-50}
                                    spy={true}
                                    smooth={true}
                                    className={classNames(
                                        "flex justify-center m-1 gap-x-2 py-2 rounded-md border-2 bg-none text-sm font-medium text-g ring-offset-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base",
                                        primary
                                            ? "border-orange-500 ring-orange-500"
                                            : "border-gray-400 ring-gray-400",
                                        Icon ? "px-4" : "px-3"
                                    )}
                                >
                                    {text}
                                </Link>
                            )
                        )}
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
