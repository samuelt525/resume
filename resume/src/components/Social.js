import React, { useMemo } from "react";
import { SocialData } from "../data";

export default function Social() {
    return (
        SocialData.map(({ label, Icon, href }) => (
            <a 
                key={label}
                href={href}
                className='rounded-md py-3 m-4 px-3 transition-all duration-300 
        hover:text-orange-500 focus:outline-none 
        focus:ring-2 focus:ring-orange-500  sm:-m-3 sm:p-3"'
            >
                <Icon className="h-8 w-8 align-baseline sm:h-6 sm:w-6" />
            </a>
        ))
    );
}
