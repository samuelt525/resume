import React from 'react'

export default function ResumeSection({title, children}) {
  return (
    <div className="grid grid-cols-1 gap-y-4 py-8 md:grid-cols-4">
        <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative mx-4 h-max">
                <h2 className="text-xl font-bold uppercase text-neutral-800"> {title} </h2>
                <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400"/>
            </div>
        </div>
        <div className="col-span-1 flex flex-col md:col-span-3">
            {children}
        </div>
    </div> 
  )
}
