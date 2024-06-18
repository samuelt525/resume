import React from "react";
import { useEffect, useRef, useState } from "react";
import Section from "../layouts/Section";
import { ProjectData } from "../data";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide}  from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

function ProjectExperience() {
  const itemRefs = useRef(ProjectData.map(() => React.createRef()))

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-10')
        }
        else {
          entry.target.classList.add('opacity-0', 'translate-y-10');
          entry.target.classList.remove('opacity-100', 'translate-y-0');
      }
      })
    },
    {threshold: 0.3})
    
    itemRefs.current.forEach(ref => {
      if (ref.current) observer.observe(ref.current)
    })
    return () => {
      itemRefs.current.forEach(ref=>{
        if(ref.current) observer.unobserve(ref.current)
      })
    }
  }, [ProjectData])
  return (
    <Section name="project experience">
        <h2 className="text-xl font-bold uppercase text-gray-950 text-left"> Project Experience </h2>
        <div className="grid grid-cols-1"> 
          {ProjectData.map((project,index) => {
              return (  
                  <div className="flex flex-col m-2 p-4 h-full border-b file:border-b-gray-500
                  transition-all duration-700 ease-in opacity-0 translate-y-10"
                  key={index} ref={itemRefs.current[index]}>
                    <div className="flex ml-4">                    
                       <img src={project.logo}className="max-h-24"/>
                      </div>
                      <h3 className="pt-3 text-2xl ml-4 text-left font-semibold ">{project?.title}</h3>

                    <div className="flex text-left items-center flex-wrap p-4 relative"> {project?.description} </div>
                    <div className="flex flex-wrap ml-4 ">
                      {project?.tech.map((tec) => {
                        return (
                          <div className="border rounded-md px-2 text-base font-semibold"> 
                            {tec}
                          </div>
                        )
                      })}
                    </div>
                    <div>
                      <div navigation={true} modules={[Navigation]} spaceBetween={30} slidesPerView={1} loop={true}>
            
                      </div>
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

                </div>
            )})}
        </div>

    </Section>
  );
}

export default ProjectExperience;
