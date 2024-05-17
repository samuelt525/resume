import React from 'react'
import Section from '../layouts/Section'
import { skillsData, SectionId } from '../data'
import ResumeSection from '../layouts/ResumeSection'
import Skills from './Resume/Skills'

export default function Resume() {

  return (
    <Section sectionId={SectionId.Resume}>
        <div className="flex flex-col divide-y-2 divide-neutral-300" >
            <ResumeSection title="Education">

            </ResumeSection>

            <ResumeSection title="Work Experience">

            </ResumeSection>
            <ResumeSection title="Skills">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {skillsData.map((skills,index) => (
                        <Skills skill={skills} key={index}/>
                        ))
                    }         
                </div>
            </ResumeSection>
        </div>
    </Section>
  )
}
