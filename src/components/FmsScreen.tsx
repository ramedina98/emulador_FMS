import React from "react";
import MenuBar from "./MenuBar";

const FmsScreen: React.FC = () => {

    return <>
        <section
            className='rounded-md border-8 border-borderMonitor w-clampBorderMonitor h-auto'
        >
            <div 
                className='w-full bg-blackRetro text-greenRetro text-3xl tracking-wider'
            >
                <MenuBar />
                hola
            </div>
        </section>
    </>
}

export default FmsScreen