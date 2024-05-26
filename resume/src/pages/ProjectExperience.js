import React from "react";
import Section from "../layouts/Section";
import { motion, useScroll } from "framer-motion";
import { ProjectData } from "../data";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
function ProjectExperience() {
  const gridContainerVariants = {
    hidden: { opacity: 0, y:100},
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const gridSquareVariants = {
    hidden: { opacity: 0, y:100 },
    show: { opacity: 1, y:0, transition:{staggerChildren: 0.25} },
  };

  return (
    <Section name="project experience">
        <h2 className="text-xl font-bold uppercase text-gray-950 text-left"> Project Experience </h2>
        
        <div className="grid grid-cols-1"> 
          {ProjectData.map((project,index) => {
              return (  
                  <a className="grid-cols-1 m-2 border rounded-lg w-40% p-[6%] 
                  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300" 
                  href={project.link.link ?? project.link.github} >
                    <h3 className="pt-3 text-2xl font-semibold ">{project?.title}</h3>
                    <div className="flex text-left items-center flex-wrap p-4 relative"> {project?.description} </div>
                    <div className="flex flex-wrap pt-4 ">
                      {project?.tech.map((tec) => {
                        return (
                          <div className="border rounded-md px-2 text-base font-semibold"> 
                            {tec}
                          </div>
                        )
                      })}
                    </div>
                    <div className="flex justify-center">
                      <img class="w-40% h-auto;" src={project.logo}></img>
                    </div> 
                    <div className="flex flex-row justify-end black-x-2 gap-x-4 p-4">
                      {project.link.github && (
                          <a href={project.link.github} className="flex">
                              <FaGithub size={24}/>
                          </a>
                      )}
                      {project.link.link && (
                          <a href={project.link.link} className="flex">
                              <FaExternalLinkAlt size={20} style={{transform: "translateY(1px)"}}/>
                          </a>
                      )}
                  </div>
                </a>
            )})}
        </div>

    </Section>

    // <Section
    //   name="project experience"
    //   noPadding={true}
    //   className="p-24 bg-gradient-to-r from-[#2c5364] to-[#203a43]"
    // >
    //   <div className="flex justify-center md:justify-start">
    //     <div className="relative mx-4 h-max">
    //       <h2 className="text-xl font-bold uppercase text-gray-950">
    //         Project Experience
    //       </h2>
    //       <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
    //     </div>
    //   </div>
    //   <motion.div className="flex flex-col gap-10 overflow-x-hidden">
    //     <motion.section
    //       variants={gridContainerVariants}
    //       initial="hidden"
    //       whileInView="show"
    //       className="grid p-4 gap-8 grid-cols-1 lg:grid-cols-2 justify-center items-center overflow-hidden relative"
    //     >
    //       {ProjectData.map((project,index) => 
    //         <ProjectCard key={index} variants={gridSquareVariants} project={project}></ProjectCard>
    //       )}
    //     </motion.section>
    //   </motion.div>
    // </Section>
  );
}

export default ProjectExperience;
