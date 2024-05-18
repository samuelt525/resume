import React from 'react'

function Education({Education}) {
    const {university, major, concentration, location, graduation, gpa} = Education
    return (
    <div className="flex flex-col text-left pb-8">
        <div className="flex flex-col pb-4"> 
            <h2 className="text-xl font-bold"> {university} </h2>
        </div>
        <div className="gap-x-4">
            <span className="flex-1 text-sm font-medium italic"> {major} </span>
        </div>
        <div>
        <span className="flex-1 text-sm font-medium"> {concentration} </span>
        </div>
        <div className="gap-x-4">
            <span className="flex-1 text-sm font-medium italic"> {graduation} </span>
            <span>•</span>
            <span className="flex-1 text-sm font-medium"> GPA: {gpa} </span>
        </div>
    </div>
  )
}

export default Education