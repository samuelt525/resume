import React from "react";
import Section from "../layouts/Section";
import { ProjectData } from "../data";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide}  from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

function ProjectExperience() {

  return (
    <Section name="project experience">
        <h2 className="text-xl font-bold uppercase text-gray-950 text-left"> Project Experience </h2>
        
        <div className="grid grid-cols-1"> 
          {ProjectData.map((project,index) => {
              return (  
                  <a className="flex flex-col m-2 border rounded-lg p-4 h-full
                  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300" 
                  href={project.link.link ?? project.link.github}>
                    <h3 className="pt-3 text-2xl font-semibold ">{project?.title}</h3>
                    <div className="flex text-left items-center flex-wrap p-4 relative"> {project?.description} </div>
                    <div className="flex flex-wrap pt-4 ml-4 ">
                      {project?.tech.map((tec) => {
                        return (
                          <div className="border rounded-md px-2 text-base font-semibold"> 
                            {tec}
                          </div>
                        )
                      })}
                    </div>
                    <div>
                      <Swiper navigation={true} modules={[Navigation]} spaceBetween={30} slidesPerView={1}>
                              {project.images?.map((image, index) => (  
                                  <SwiperSlide key={index} >
                                    <img src={image.image} className="center aspect-square max-h-[250px] w-full h-full object-contain"/>
                                  </SwiperSlide>
                          ))}
                      </Swiper>
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
  );
}

export default ProjectExperience;
