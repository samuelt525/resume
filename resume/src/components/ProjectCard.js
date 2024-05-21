import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectCard({ project, className }) {
  const { title, image, tech, link, description, motive } = project;
  const github = link.github;
  const otherLink = link.link;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsOpen(!isOpen)}
      className="bg-white rounded-lg shadow-md p-12 flex flex-col  cursor-pointer"
    >
      <motion.div className="w-full h-auto flex flex-col items-center">
        <motion.img width={100}layout="position" src={image}/>
        <motion.h2 layout="position" className="font-bold text-m ">
          {title}
        </motion.h2>
      </motion.div>

      {isOpen && (
        <motion.div className="flex flex-col justify-center">
          <motion.div className="text-sm italic">{tech}</motion.div>
          <motion.p className="flex justify-center">{description}</motion.p>
        </motion.div>
      )}
      <motion.div layout className="flex flex-row justify-end gap-x-2">
        {github && (
          <motion.a href={github} className="flex justify-end">
            <FaGithub />
          </motion.a>
        )}
        {otherLink && (
          <motion.a href={otherLink} className="flex justify-end">
            <FaExternalLinkAlt />
          </motion.a>
        )}
      </motion.div>
    </motion.div>
  );
}

export default ProjectCard;
