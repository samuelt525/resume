import React, {useState} from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";


function ProjectCard({ project }) {
  const { title, image, tech, link, description, motive } = project;

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div >
      <motion.div transition={{layout: {type: "spring"}}}  layout onClick={() => setIsOpen(!isOpen)} 
        className="w-full h-full bg-white rounded-lg p-4 flex flex-col items-center cursor-pointer">
        <motion.img layout="position" className="flex justify-center" src={image} />
        <motion.h2 layout="position" className="font-bold text-m ">{title}</motion.h2>
        {isOpen && (
          <div>
            <motion.div>
              <motion.div className="text-sm italic">
                {tech}
              </motion.div>
                <p>
                  {description}
                </p>
            </motion.div>
            </div>
        )}  
        <motion.a href={link} className="flex justify-end"> <FaExternalLinkAlt /></motion.a>
      </motion.div>
    </div>
  );
}

export default ProjectCard;
