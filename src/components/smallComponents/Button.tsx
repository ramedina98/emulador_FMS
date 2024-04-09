import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ButtonProps{
    color: string, 
    width: string,
    icon: IconDefinition, 
    clickF: () => void
}

const Button: React.FC<ButtonProps> = ({ color, width, icon, clickF }) => {

    return <>
        <button
            className={`text-lg ${width} py-1 rounded-sm ${color} hover:bg-blackRetro shadow-buttonShadow`}
            onClick={clickF}
        >
            <FontAwesomeIcon icon={icon} />
        </button>
    </>
}

export default Button