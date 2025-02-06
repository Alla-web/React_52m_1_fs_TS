import { EmployeeDataTypes } from "lessons/Lesson15/CreateEmployee/types";
import { Dispatch, ReactNode, SetStateAction } from "react";

export interface EmployeeLayoutProps {
  children: ReactNode;
}

export interface EmployeeDataContextType {
  employee: EmployeeDataTypes | undefined;
  setEmployeeData: Dispatch<SetStateAction<EmployeeDataTypes | undefined>>;
}
