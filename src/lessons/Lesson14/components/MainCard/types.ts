import { Dispatch, SetStateAction } from "react"

export interface UserData {
  firstName: string,
  lastName: string,
  age: number
}

export interface MainCardContextType {
  data : UserData | undefined,
  //функция из стейта
  onDataChange: Dispatch<SetStateAction<UserData | undefined>> | (()=> void)
}