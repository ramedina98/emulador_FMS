import React, { CSSProperties } from "react";
import DateHour from "./DateHour";

interface TasksCardProps{
    id: number, 
    customStyle: CSSProperties
    getInfo: (id: number, event: React.ChangeEvent<HTMLInputElement>) => void
}

const TasksCard: React.FC<TasksCardProps> = ({ id, customStyle, getInfo }) => {
    
    return <>
        <div
            style={{
                ... customStyle,
                width: 'clamp(310px, 95%, 380px)',
            }}
            className="h-auto bg-blackRetro rounded-sm shadow-buttonShadow p-2 flex flex-col justify-start items-center"
        >
            {/*counter*/}
            <div
                className='w-full flex justify-between items-center'
            >
                <span
                    style={{
                        fontSize: '0.55em'
                    }}
                >
                    00{id + 1}
                </span>
                {/*date and time component*/}
                <DateHour />
            </div>
            {/*inputs*/}
            <div
                className="w-full h-auto flex flex-col mb-4"
            >
                <div
                    className="flex flex-col justify-center items-start"
                >
                    <label 
                        htmlFor="name"
                        style={{
                            fontSize: '0.8em'
                        }}
                    >
                        Nombre:
                    </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        maxLength={20} 
                        required
                        style={{
                            border: '0.5px solid white',
                            fontSize: '0.8em'
                        }}
                        className="outline-none w-full rounded-sm bg-transparent px-2"
                        onChange={(event) => getInfo(id, event)}
                    />
                </div>
                <div>
                    <label 
                        htmlFor="operation"
                        style={{
                            fontSize: '0.8em'
                        }}
                    >
                        Operación:
                    </label>
                    <input 
                        type="text" 
                        id="operation" 
                        name="operation" 
                        required
                        style={{
                            border: '0.5px solid white',
                            fontSize: '0.8em'
                        }}
                        className="outline-none w-full rounded-sm bg-transparent px-2"
                        onChange={(event) => getInfo(id, event)}
                    />
                </div>
            </div>
        </div>
    </>
}

export default TasksCard