import React from 'react'
import { SectionId } from '../data'
import {Element} from 'react-scroll'

export default function Section({children, sectionId, sectionTitle, noPadding = false, className})
{
    Section.displayName = 'Section'
    return (
        <Element name={sectionId}>
            <div>{children}asdfadsfds</div>
        </Element>
    )
};



