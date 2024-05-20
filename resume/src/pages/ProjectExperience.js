import React from 'react'
import Section from '../layouts/Section'

import { ProjectData } from '../data'
import ProjectCard from '../components/ProjectCard'
function ProjectExperience() {

  console.log(ProjectData)
  return (
    <Section name="project experience" className="bg-gradient-to-r from-[#2c5364] to-[#203a43]">
        <h1 className="text-2xl text-white"> Project Experience</h1>
        <div className="flex flex-row justify-center m-4 gap-x-4">
          
          {ProjectData.map((project, index) => (
              <ProjectCard key={index} project={project}/>
          ))}
        </div>
        
    </Section>
  )
}

export default ProjectExperience