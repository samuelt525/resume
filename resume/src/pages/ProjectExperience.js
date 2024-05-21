import React from 'react'
import Section from '../layouts/Section'
import {motion} from 'framer-motion'
import { ProjectData } from '../data'
import ProjectCard from '../components/ProjectCard'
function ProjectExperience() {

  console.log(ProjectData)
  return (
    <Section name="project experience" noPadding={true} className="py-4 px-4 bg-gradient-to-r from-[#2c5364] to-[#203a43]">
        <div className="col-span-1 flex justify-center md:justify-start">
          <div className="relative mx-4 h-max">
            <h2 className="text-xl font-bold uppercase text-white"> Project Experience  </h2>
              <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400"/>
          </div>
        </div>
        <motion.div layout="preserve-aspect" className="grid grid-cols-3 m-3 p-4 auto-rows-fr items-center gap-4 ">
              <ProjectCard project={ProjectData[0]}/>
              <ProjectCard project={ProjectData[1]}/>
              <ProjectCard project={ProjectData[2]}/>
              <ProjectCard project={ProjectData[3]}/>
              <ProjectCard project={ProjectData[4]}/>
        </motion.div>
        
    </Section>
  )
}

export default ProjectExperience