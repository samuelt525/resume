import React from 'react'

function WorkExperience({WorkExperience}) {
  const{
    company,
    date,
    location,
    role,
    responsibilities,
    image
  } = WorkExperience
  console.log(company)
  return (
    <div className="flex flex-col text-left pb-8">
      <div className="flex flex-col pb-4"> 
        <h2 className="text-xl font-bold">{company}</h2>
        <div className="flex justify-end bottom-4">
          <img src={image} width={100} alt="Company Logo"/>
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-sm font-medium italic">{role}</span>
        <span className="mx-2">•</span>
        <span className="text-sm font-medium">{date}</span>
      </div>
      <div>
        {responsibilities.map((responsibility, index) => (
          <ul key={index} className="list-disc">
            <li>{responsibility}</li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default WorkExperience