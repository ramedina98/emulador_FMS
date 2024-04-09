import React from "react";
import OutputCard from "./smallComponents/OutputCard";
import { dataFormat } from "../interfaces/Interfaces";

interface MonitorOutputProps{
    dataArray?: dataFormat[]
}

const MonitorOutput: React.FC<MonitorOutputProps> = ({ dataArray }) => {

    return (
        <div 
            style={{
                width: 'clamp(400px, 100%, 500px)',
                height: '650px',
            }}
            className='overflow-y-auto'
        >
            {dataArray && dataArray.map((data: dataFormat, index:number) => (
                <OutputCard 
                    key={index}
                    data={data}
                />
            ))}
        </div>
    );
}

export default MonitorOutput