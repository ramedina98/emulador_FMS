import React, { useState } from "react";
import MenuBar from "./smallComponents/MenuBar";
import TasksHolder from "./TasksHolder";
import MonitorOutput from "./MonitorOutput";
import { dataFormat } from "../interfaces/Interfaces";
import { prevDataFormat } from "../interfaces/Interfaces";
import Trabajo from "../trabajo/Trabajo";

const FmsScreen: React.FC = () => {
    
    // Define a state variable 'play' initialized to false...
    const [play, setPlay] = useState<boolean>(false);

    // define a state variable 'processData', it helps us to get the necessary data to print it...
    const [processData, setProcessData] = useState<dataFormat[] | undefined >([]);
    
    //function to separate the elements of the operation...
    const hanleDataOfTheOperation: (operation: string) => any = (operation)=> {
        //I use a regular expression to search for any of the four symbols (+, -, *, /)
        const match = operation.match(/[+\-*\/]/);

        if(!match){
            // if we do not find any known symbol for the operation we retunr error...
            throw new Error('La operación no contiene un simbolo válido'); 
        }

        // get the symbol...
        const symbol: any = match[0];

        //now I take the numbers of the operation...
        const [a, b] = operation.split(symbol);

        return {
            symbol: symbol.trim(), 
            a: parseFloat(a.trim()), 
            b: parseFloat(b.trim()),
        }
    }

    // get the date... 
    const getTheDate: () => string = () => {
        const currentDate = new Date();
        return `${currentDate.getDate().toString().padStart(2, '0')}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getFullYear().toString().slice(2)} ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}`;
    }


    // this function helps us to cut all the white spaces between chars...
    const cutWhiteSpeaces: (str: string) => string = (str) => {
        return str.replace(/\s+/g, '').trim();
    }

    //the process begins..
    const handleTheProcess: (data: prevDataFormat[]) => void = (data)=> {
        setProcessData([]); // this helps us to clean the monitor Screen component...
        let dataArray: dataFormat[] = [];
        let index = 0;
        //change the status to true...
        setPlay(true);

        const addDataItem: () => void = () => {
            if (index < data.length) {
                const d = data[index];

                if (d.operation) {
                    // get the symbol of the operation...
                    const { symbol, a, b } = hanleDataOfTheOperation(d.operation);
                    //we instantiate the "trabajo" class and send the necessary info...
                    const nuevoTrabajo = new Trabajo(d.name, symbol, a, b);

                    /* create a new element of type dataFormat, with the info 
                    of the operation result and extra data...*/
                    const newItem: dataFormat = {
                        id: d.id,
                        name: d.name,
                        date: d.date,
                        executionDate: getTheDate(),
                        operation: cutWhiteSpeaces(d.operation),
                        result: nuevoTrabajo.resolveOperation()
                    };

                    //push the new element into the array...
                    dataArray.push(newItem);
                    setProcessData([...dataArray]);

                    index++;
                    setTimeout(addDataItem, 1500);
                } else {
                    //if the operatiomn element is empty...
                    console.error('La operación no está definida');
                }
            } else{
                // we change the status to false...
                setPlay(false); 
            }
        };

        // 2 seconds to the start of the process...
        setTimeout(() => {
            addDataItem();
        }, 2000);
    }

    //clean monitor (right side)
    const handleCleanMonitor: () => void = () => {
        setProcessData([]);
    }

    return <>
        <section
            className='shadow-monitorShadow rounded-md border-8 border-borderMonitor w-borderMonitor h-auto'
        >
            <div 
                className='w-full bg-blackRetro text-greenRetro text-3xl tracking-wider flex flex-col justify-start items-start'
            >
                <MenuBar />
                <div
                    className='w-full h-auto flex flex-wrap justify-between item-start'
                >
                    <TasksHolder 
                        startProcess={handleTheProcess}
                        cleanMonitor={handleCleanMonitor}
                        play={play}
                    />
                    <MonitorOutput 
                        dataArray={processData}
                    />
                </div>
            </div>
        </section>
    </>
}

export default FmsScreen