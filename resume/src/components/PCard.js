import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function PCard({ variants, project }) {
    const { title, image, tech, link, description, motive } = project;
    const github = link.github;
    const otherLink = link.link;

    return (
        <motion.div
            variants={variants}
            transition={{duration: 1, ease:"easeOut", delay:0.25}}
            className="bg-gray-500 overflow-hidden aspect-square rounded-lg border border-gray-700 shadow-md flex flex-col gap-10 "
        >
            <div className="flex flex-col items-center">
                {image && (
                    <img
                        src={image}
                        className="w-128 h-64 overflow-hidden bg-white rounded-lg border border-white"
                    />
                )}
            </div>
            <motion.h2 className="font-bold text-m flex-start text-white text-2xl items-start text-left ">
                {title}
            </motion.h2>
            <motion.div className="ml-1 text-m text-white text-left">
                {tech.map((tec, index) => <span className="rounded-md border border-white py-1 px-2 mx-1">{tec}</span>)}

            </motion.div>
            <motion.p>{description}</motion.p>
            <motion.div className="flex flex-row justify-end gap-x-2 p-4">
                {github && (
                    <motion.a href={github} className="flex">
                        <FaGithub />
                    </motion.a>
                )}
                {otherLink && (
                    <motion.a href={otherLink} className="flex">
                        <FaExternalLinkAlt />
                    </motion.a>
                )}
            </motion.div>
        </motion.div>
    );
}

export default PCard;
