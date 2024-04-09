import React, { useState } from "react";
import Button from "./smallComponents/Button";
import { faArrowDown, faArrowUp, faPlay, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import TasksCard from "./smallComponents/TasksCard";
import { prevDataFormat } from "../interfaces/Interfaces";

interface TasksHolderProps{
    startProcess: (data: prevDataFormat[]) => void,
    cleanMonitor: () => void, 
    play: boolean, // this boolean prop helps us to change the color of the botton play...
    //true = yellow, false = blue
}

const TasksHolder: React.FC<TasksHolderProps> = ({ startProcess, cleanMonitor, play }) => {

    // define a state variable call 'message' it helps us to know if something went wrong...
    const [message, setMessage] = useState<string>('Tareas');

    // Define a state variable 'numberOfTasks' initialized to 0 using useState hook
    const [numberOfTasks, setNumberOfTasks] = useState<number>(0); 

    // Function to handle decreasing the number of tasks
    const handleClickDown: () => void = () => {
        // Check if numberOfTasks is not 0
        if(numberOfTasks !== 0 && !play){
            // Update numberOfTasks by subtracting 1
            setNumberOfTasks(numberOfTasks - 1);
            // Delete the last element of the data array...
            setData(prevData => prevData.slice(0, -1));
        }
    }

    // Function to handle increasing the number of tasks
    const handleClickUp: () => void = () => {
        // Check if numberOfTasks is not 10
        if(numberOfTasks !== 10 && !play){
            // Update numberOfTasks by adding 1
            setNumberOfTasks(numberOfTasks + 1);
            const currentDate = new Date(); // Obtener la fecha y hora actual
            const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getFullYear().toString().slice(2)} ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}`;
            // add a new element to the data array...
            setData(prevData => [...prevData, { id: numberOfTasks, name: '', operation: '', date: formattedDate}]);
        }
    }

    // Define state variable 'data' using the useState hook. 
    // 'data' holds an array of objects with properties 'id', 'name', and 'operation'.
    const [data, setData] = useState<prevDataFormat[]>([]);

    // Function to handle changes in input fields.
    // 'id' is the id of the task, and 'event' is the event object.
    const handleInputs: (id: number, event: React.ChangeEvent<HTMLInputElement>) => void = (id, event) => {
        // Destructure 'name' and 'value' from the input event.
        const { name, value } = event.target;

        // Use a switch statement to determine which input field has changed.
        switch(name){
            case 'name': 
                // Update the 'name' property of the task with the given 'id' in 'data'.
                // Use the functional form of 'setData' to ensure correct state update.
                setData(prevData => {
                    const newData = [...prevData]; // Create a copy of the 'data' array.
                    newData[id] = {...newData[id], name: value}; // Update the 'name' property.
                    return newData; // Return the updated array.
                }); 
            break; 

            case 'operation': 
                // Update the 'operation' property of the task with the given 'id' in 'data'.
                // Use the functional form of 'setData' to ensure correct state update.
                setData(prevData => {
                    const newData = [...prevData]; // Create a copy of the 'data' array.
                    newData[id] = { ...newData[id], operation: value }; // Update the 'operation' property.
                    return newData; // Return the updated array.
                });
            break; 

            default: 
                // Log a message if the input field name is not recognized.
                console.log('Help')
            break; 
        }
    }

    // Function to check if any field in the array is empty
    const verifier: (array: prevDataFormat[]) => boolean = (array) => {
        // verify if the array length is 0
        if(array.length === 0){
            return true; 
        }

        // Declaration of a boolean variable to track if any field is empty
        let isEmpty: boolean = false;

        // Iterate over the array to check for any empty field
        for (let i = 0; i < array.length; i++) {
            // Check if either 'name' or 'operation' field is empty
            if (!array[i].name || !array[i].operation) {
                // If an empty field is found, set isEmpty to true and exit the loop
                isEmpty = true;
                break;
            }
        }

        // Return true if any field is empty, otherwise return false
        return isEmpty;
    }

    //logic for the cancel button... 
    const handleButtonCancel: () => void = () => {
        // delete all the cards...
        setNumberOfTasks(0);
        //clean monitor (right side)
        cleanMonitor();
        // delete all the info...
        setData([]);
        // we change the status of the message...
        setMessage('Tareas');
    }

    //logic for the play button... 
    const handleButtonPlay: () => void = () => {
        // check if there are any empty element in the array...
        const empty = verifier(data); 
        
        // if the result is false, we start the process...
        if(!empty){
            startProcess(data);
            //if the original state of the variable changed, reestableshed...
            if(message !== 'Tareas'){
                // this is the original state...
                setMessage('Tareas');
            }
        } else{ // if is true we send a message to let the user know the problem...
            play = false; 
            setMessage('Inputs vacios');
        }
    }

    return <>
        <div
            style={{
                width: 'clamp(400px, 100%, 400px)',
                minHeight: '650px'
            }}
            className="bg-blackRetro border-r-2 border-x-borderMonitor flex flex-col justify-start items-center"
        >
            {/* title and buttons (counter)...*/}
            <div
                className="border-b-2 w-full px-3 py-6 flex justify-between items-center"
            >
                <div
                    style={{
                        width: '100px'
                    }}
                    className="text-left"
                >
                    {message}
                </div>
                <div
                    style={{
                        width: '170px'
                    }}
                    className="flex justify-between"
                >
                    <Button 
                        color='bg-violetRetro'
                        width='w-1/3'
                        icon={faArrowDown}
                        clickF={handleClickDown}
                    />
                    <span>{numberOfTasks}</span>
                    <Button 
                        color='bg-violetRetro'
                        width='w-1/3'
                        icon={faArrowUp}
                        clickF={handleClickUp}
                    />
                </div>
            </div>
            {/*here are the cards with the taskt to be performed*/}
            <div
                style={{
                    height: '490px'
                }}
                className="border-b-2 w-full p-2 flex flex-col justify-start items-center overflow-y-auto"
            >
                {Array(numberOfTasks).fill(0).map((_, index) => (
                    <TasksCard 
                        key={index}
                        id={index}
                        customStyle={{ marginBottom: '0.6em' }}
                        getInfo={handleInputs}
                    />
                ))}
            </div>
            {/*here is the button that starts the process or cancels it...*/}
            <div
                style={{
                    height: '73.5px'
                }}
                className="w-full flex justify-between items-center px-3"
            >
                <div
                    style={{
                        width: '150px',
                    }}
                >
                    <Button 
                        color='bg-retroRed'
                        width='w-full'
                        icon={faTrashAlt}
                        clickF={handleButtonCancel}
                    />
                </div>
                <div
                    style={{
                        width: '150px',
                    }}
                >
                    <Button 
                        color={play ? `bg-retroYellow` : 'bg-retroBlue'}
                        width='w-full'
                        icon={faPlay}
                        clickF={handleButtonPlay}
                    />
                </div>
            </div>
        </div>
    </>
}

export default TasksHolder