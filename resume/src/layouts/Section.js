import React from 'react'
import classNames from 'classnames'
import {Element} from 'react-scroll'

export default function Section({children, name , noPadding = false, className})
{
    return (
        <Element name={name} className={classNames(className, {'px-4 py-12 md:py-24 lg:px-8': !noPadding})} id={name}>
            <div className={classNames({'mx-auto max-w-screen-lg': !noPadding})}>{children}</div>
        </Element>
    )
};



