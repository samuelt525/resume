import React, {useState} from "react";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  const { title, image, tech, link, description, motive } = project;

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <motion.div layout onClick={() => setIsOpen(!isOpen)} className="w-full h-full bg-white p-4">
        <motion.h2 layout class="font-bold text-m ">{title}</motion.h2>
        {isOpen && (
            <motion.div>
                {description}
            </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default ProjectCard;
