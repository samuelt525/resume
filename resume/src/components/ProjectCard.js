import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide}  from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
function ProjectCard({ variants, project }) {
    const { title, image, images, tech, link, description, motive } = project;
    const github = link.github;
    const otherLink = link.link;

    return (
        <motion.div
            variants={variants}
            transition={{ duration: 1, ease: "easeOut", delay: 0.25 }}
            className="flex flex-col mx-[10%] overflow-hidden aspect-square rounded-lg border border-gray-700 shadow-lg  black-3 bg-white"
        >
            <div className="w-full h-[60%] bg-white">
                <Swiper navigation={true}
                modules={[Navigation]} spaceBetween={30} slidesPerView={1} className="w-full h-[100%]">
                    {images?.map((image, index) => (  
                        <SwiperSlide key={index} >
                            <img style={{  position: 'absolute',
                            top: `${image.top}px`,
                            bottom: `${image.bottom}px`,
                            left: `${image.left}px`,
                            right: `${image.right}px`}} 
                            src={image.image} className="object-contain"/>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <motion.div className="m-2 p-2">
                <motion.h2 className="font-bold text-m flex-start text-black text-3xl items-start text-left px-2 mx-1 ">
                    {title}
                </motion.h2>
                <motion.div className="ml-4 mt-4 text-m text-black text-left">
                    {tech.map((tec, index) => (
                        <span className="rounded-md border border-black py-1 px-2 m-1">
                            {tec}
                        </span>
                    ))}
                </motion.div>
                <motion.p className="mt-4">{description}</motion.p>
                <motion.div className="flex flex-row justify-end black-x-2 p-4">
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
        </motion.div>
    );
}

export default ProjectCard;
