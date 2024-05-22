import React from "react";
import Section from "../layouts/Section";
import { motion, useScroll } from "framer-motion";
import { ProjectData } from "../data";
import ProjectCard from "../components/ProjectCard";
import PCard from "../components/PCard";
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

  const { ScrollYProgress: completionProgress } = useScroll();
  console.log(ProjectData);
  return (
    <Section
      name="project experience"
      noPadding={true}
      className="py-4 px-4 bg-gradient-to-r from-[#2c5364] to-[#203a43]"
    >
      <div className="flex justify-center md:justify-start">
        <div className="relative mx-4 h-max">
          <h2 className="text-xl font-bold uppercase text-white">
            Project Experience
          </h2>
          <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
        </div>
      </div>
      <div className="flex flex-col gap-10 overflow-x-hidden">
        <motion.section
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="show"
          className="grid lg:grid-cols-3 p-10 gap-10 grid-cols-1 overflow-hidden relative"
        >
          {ProjectData.map((project,index) => 
            <PCard key={index} variants={gridSquareVariants} project={project}></PCard>
          )}
        </motion.section>
      </div>
    </Section>
  );
}

export default ProjectExperience;
