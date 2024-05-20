import React from 'react'
import Section from '../layouts/Section'
import { SkillsData, WorkExperienceData, EducationData } from '../data'
import ResumeSection from '../layouts/ResumeSection'
import Skills from './Resume/Skills'
import Education from './Resume/Education'
import WorkExperience from './Resume/WorkExperience'

export default function Resume() {
    return (
    <Section name='resume' images={null}>
        <div className="flex flex-col divide-y-2 divide-neutral-300" >
            <ResumeSection title="Education">
                <div className='="flex flex-col divide-y-2'>
                    <Education Education={EducationData} />
                </div>
            </ResumeSection>

            <ResumeSection title='Work Experience'>
                <div className="grid grid-cols-1 gap-y-4 py-8 md:grid-cols-4">
                    <div className="col-span-4 flex flex-col">
                        {WorkExperienceData.map((workExperience, index) => {
                                return <WorkExperience WorkExperience={workExperience} key={index} />
                            })}
                    </div>
        
                </div> 
            </ResumeSection>
            <ResumeSection title="Skills" images={null}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {SkillsData.map((skills,index) => (
                        <Skills skill={skills} key={index}/>
                        ))
                    }         
                </div>
            </ResumeSection>
        </div>
    </Section>
  )
}
