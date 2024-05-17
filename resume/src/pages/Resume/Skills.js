import {React, useMemo} from 'react'

export default function Skills({skill}) {
    const {name, skills} = skill
    return (
    <div className="flex flex-col">
        <span className="text-center text-lg font-bold">{name}</span>
        <div className="flex flex-col">
            {skills.map((skill, index) => (
                <Skill skill={skill} key={index} />
            ))}
        </div>
    </div>
  )
}


function Skill({skill}){
    const {name, Icon, level, max = 10} = skill


    const percentage = useMemo(() => Math.round((level/max) * 100), [level,max])
    return (
        <div className="flex flex-col gap-y-2">
            <div className="flex items-center"> {/* Flex container for horizontal alignment */}
                {Icon && <Icon className="mr-2" />} {/* Icon with margin to the right */}
                <span className="text-sm font-medium m-1 ">{name}</span> {/* Skill name */}
            </div>
            <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300"> {/* Added margin-top */}
                <div className="h-full rounded-full bg-orange-400" style={{ width: `${percentage}%` }} />
            </div>

        </div>
    )
}