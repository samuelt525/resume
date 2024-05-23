import React from "react";
import Section from "../layouts/Section";
import { motion, useScroll } from "framer-motion";
import { ProjectData } from "../data";
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

  console.log(ProjectData);
  return (
    <Section
      name="project experience"
      noPadding={true}
      className="p-8 bg-gradient-to-r from-[#2c5364] to-[#203a43]"
    >
      <div className="flex justify-center md:justify-start">
        <div className="relative mx-4 h-max">
          <h2 className="text-xl font-bold uppercase text-gray-950">
            Project Experience
          </h2>
          <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
        </div>
      </div>
      <motion.div className="flex flex-col gap-10 overflow-x-hidden">
        <motion.section
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="show"
          className="grid p-4 gap-8 grid-cols-1 lg:grid-cols-2 justify-center items-center overflow-hidden relative"
        >
          {ProjectData.map((project,index) => 
            <ProjectCard key={index} variants={gridSquareVariants} project={project}></ProjectCard>
          )}
        </motion.section>
      </motion.div>
    </Section>
  );
}

export default ProjectExperience;
