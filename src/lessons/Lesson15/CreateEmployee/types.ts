import { Dispatch, SetStateAction } from "react"

export interface EmployeeDataTypes {
    // id: number,
    name: string,
    surname: string,
    age: string,
    jobPosition?: string
}

export interface EmployeeContextType {
    employee: EmployeeDataTypes[],
    addEmployee: Dispatch<SetStateAction<EmployeeDataTypes[]>> | (()=> void)
}