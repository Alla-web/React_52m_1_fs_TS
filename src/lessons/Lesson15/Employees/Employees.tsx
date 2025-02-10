import Button from "components/Button/Button";
import {
  DeleteAlEmployeesButtonContainer,
  DeleteButtonContainer,
  EmployeeCardContainer,
  EmployeeCardsWrapper,
  EmployeeContainer,
  StingValue,
  StringTitle,
  TitleValueContainer,
} from "./styles";
import { useContext } from "react";
import { EmployeeDataContext } from "components/EmployeeLayout/EmployeeLayout";

function Employee() {
  const { employee, setEmployeeData } = useContext(EmployeeDataContext);

  //логика удаления данных
  const onDeleteData = () => {
    setEmployeeData(undefined);
  };

  return (
    <EmployeeContainer>
      <EmployeeCardsWrapper>
        {employee && (
          <EmployeeCardContainer>
            <TitleValueContainer>
              <StringTitle>Name</StringTitle>
              <StingValue>{employee.name}</StingValue>
            </TitleValueContainer>
            <TitleValueContainer>
              <StringTitle>Surname</StringTitle>
              <StingValue>{employee.surname}</StingValue>
            </TitleValueContainer>
            <TitleValueContainer>
              <StringTitle>Age</StringTitle>
              <StingValue>{employee.age}</StingValue>
            </TitleValueContainer>
            <TitleValueContainer>
              <StringTitle>Job position</StringTitle>
              <StingValue>{employee.jobPosition}</StingValue>
            </TitleValueContainer>
            <DeleteButtonContainer>
              <Button name="DELETE" isRed onClick={onDeleteData} />
            </DeleteButtonContainer>
          </EmployeeCardContainer>
        )}
      </EmployeeCardsWrapper>
      <DeleteAlEmployeesButtonContainer>
        <Button name="REMOOVE AL EMPLOYEES" isRed onClick={()=>{}}/>
      </DeleteAlEmployeesButtonContainer>
    </EmployeeContainer>
  );
}

export default Employee;
