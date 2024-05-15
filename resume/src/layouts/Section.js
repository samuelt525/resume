import React, {memo, PropsWithChildren} from 'react'
import { SectionId } from '../data'
import {Element} from 'react-scroll'

const Section = memo(({children, sectionId, sectionTitle, noPadding = false, className}) => {
    return (
        <Element name={sectionId}>
            <div>{children}</div>
        </Element>
    )
});

Section.displayName = 'Section'
export default Section;

