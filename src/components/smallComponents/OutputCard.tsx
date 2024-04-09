import React from "react";
import { dataFormat } from "../../interfaces/Interfaces";

interface OutputCardProps{
    data: dataFormat
}

const OutputCard: React.FC<OutputCardProps> = ({ data }) => {

    return <>
        <div
            style={{
                borderBottom: '0.5px solid transparent'
            }}
            className='w-full shadow-outputCard'
        >
            <ul
                style={{
                    fontSize: '0.75em'
                }}
                className='w-full py-3 tracking-widest'
            >
                <li
                    className="py-1"
                >
                    Nombre programador: <span>{data.name}</span>
                </li>
                <li
                    className="py-1"
                >
                    Tarea: <span>00{data.id + 1}</span>
                </li>
                <li
                    className="py-1"
                >
                    Fecha: <span>{data.date}</span>
                </li>
                <li
                    className="py-1"
                >
                    Operación: <span>{data.operation}</span>
                </li>
                <li
                    className="py-1"
                >
                    Resultado: <span>{data.result}</span>
                </li>
                <li
                    className="py-1"
                >
                    Fecha de ejecución: <span>{data.executionDate}</span>
                </li>
            </ul>
        </div>
    </>
}

export default OutputCard