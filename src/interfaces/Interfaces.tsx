export interface dataFormat{
    id: number, 
    name: string, 
    date: string, 
    executionDate: string,
    operation: string, 
    result?: number
}

export interface prevDataFormat{
    id: number, 
    name: string,
    operation: string,  
    date: string, 
}