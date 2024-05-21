import React from "react";
import Section from "../layouts/Section";
import { SkillsData, WorkExperienceData, EducationData } from "../data";
import ResumeSection from "../layouts/ResumeSection";
import Skills from "./Resume/Skills";
import Education from "./Resume/Education";
import WorkExperience from "./Resume/WorkExperience";

export default function Resume() {
  return (
    <Section name="resume" images={null}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Education">
          <div className='="flex flex-col divide-y-2'>
            <Education Education={EducationData} />
          </div>
        </ResumeSection>

        <div>
          <div className="grid grid-cols-3 gap-y-4 py-8 md:grid-cols-4">
            <div className="col-span-1 flex flex-col gap-y-48 relative h-max justify-center md:justify-start">
                <h2 className="text-start text-xl font-bold uppercase text-neutral-800">
                    Work Experience
                </h2>
                <span className="absolute inset-x-1 -bottom-1 border-b-2 border-orange-400 w-48" />
            </div>
          </div>
          <div className="grid lg:grid-cols-5 lg:lgrid-rows-3  lg:auto-cols-fr lg:auto-rows-fr lg:gap-4 sm:gap-1 md:grid-cols-1 sm:grid-cols-1">
            <div className="lg:col-span-2 flex flex-row lg:gap-x-14 sm:gap-1  sm:col-span-1">
                <img style={{width: "200px", height: "100%"}} src={WorkExperienceData[0].image} ></img>
            </div>
            <div className="lg:col-span-3 sm:col-span-1">
                <WorkExperience WorkExperience={WorkExperienceData[0]} />
            </div>

            <div className="lg:col-span-2 flex flex-row lg:gap-x-14 sm:gap-1 sm:col-span-1">
                <img className="lg:w-1/2 lg:h-1/2 " src={WorkExperienceData[1].image} ></img>
            </div>
            <div className="lg:col-span-3 sm:col-span-1">
                <WorkExperience WorkExperience={WorkExperienceData[1]} />
            </div>


            <div className="lg:col-span-2 flex flex-row lg:gap-x-14 md:gap-1 sm:gap-1 sm:col-span-1">
                <img className="lg:h-1/2 " src={WorkExperienceData[2].image} ></img>
            </div>
            <div className="lg:col-span-3 sm:col-span-1">
                <WorkExperience WorkExperience={WorkExperienceData[2]} />
            </div>

            {/* <div className="col-span-2 flex flex-row gap-x-14">
                <img style={{width: "50%", height: "50%"}} src={WorkExperienceData[1].image} ></img>
            </div>
            <div className="col-span-3 flex flex-row gap-x-14">
                <WorkExperience WorkExperience={WorkExperienceData[1]} />
            </div>
            <div className="col-span-2 flex flex-row gap-x-14">
                <img style={{width: "90%", height: "50%"}}  src={WorkExperienceData[2].image} ></img>
            </div>
            <div className="col-span-3 flex flex-row gap-x-14">
                <WorkExperience WorkExperience={WorkExperienceData[2]} />
            </div> */}
          </div>
        </div>
        {/* <ResumeSection title="Work Experience">
          <div className="grid grid-cols-1 gap-y-4 py-8 md:grid-cols-4">
            <div className="col-span-4 flex flex-col">
              {WorkExperienceData.map((workExperience, index) => {
                return (
                  <WorkExperience WorkExperience={workExperience} key={index} />
                );
              })}
            </div>
          </div>
        </ResumeSection> */}
        <ResumeSection title="Skills" images={null}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {SkillsData.map((skills, index) => (
              <Skills skill={skills} key={index} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
}
