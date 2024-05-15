import React, {memo} from 'react'
import classNames from 'classnames'
import {heroData, SectionId} from '../data'
import Section from '../layouts/Section';


const Hero = memo(() => {
    const {imageSrc, name, description, actions} = heroData;

    return (
        <Section sectionId={SectionId.Hero}>
            <div className="relative flex h-screen w-full items-center justify-center">
                <h1> {name} </h1>
                <p> {description} </p>

            <div>
                {actions.map(({href, text, primary, Icon}) => (
                    <a className={classNames(
                        'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                        primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
                      )}
                    href={href}
                    key={text}>
                    {text}
                    {Icon}
                    </a>
                ))}
            </div>
            </div>
        </Section>
      )
}); 
 Hero.displayName = "Hero"
export default Hero;