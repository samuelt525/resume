import React from 'react'
import classNames from 'classnames'
import { SectionId } from '../data'
import {Element} from 'react-scroll'

export default function Section({children, sectionId, sectionTitle ="", noPadding = true, className})
{
    return (
        <Element name={sectionId} className={classNames(className, {'px-4 py-16 md:py-24 lg:px-8': !noPadding})} id={sectionId}>
            <div className={classNames({'mx-auto max-w-screen-lg': !noPadding})}>{children}</div>
        </Element>
    )
};



