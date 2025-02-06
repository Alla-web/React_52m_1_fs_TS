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
  const { employeeData, setEmployeeData } = useContext(EmployeeDataContext);

  //логика удаления данных
  const onDeleteData = () => {
    setEmployeeData(undefined);
  };

  return (
    <EmployeeContainer>
      <EmployeeCardsWrapper>
        {employeeData && (
          <EmployeeCardContainer>
            <TitleValueContainer>
              <StringTitle>Name</StringTitle>
              <StingValue>{employeeData.name}</StingValue>
            </TitleValueContainer>
            <TitleValueContainer>
              <StringTitle>Surname</StringTitle>
              <StingValue>{employeeData.surname}</StingValue>
            </TitleValueContainer>
            <TitleValueContainer>
              <StringTitle>Age</StringTitle>
              <StingValue>{employeeData.age}</StingValue>
            </TitleValueContainer>
            <TitleValueContainer>
              <StringTitle>Job position</StringTitle>
              <StingValue>{employeeData.jobPosition}</StingValue>
            </TitleValueContainer>
            <DeleteButtonContainer>
              <Button name="DELETE" isRed onClick={onDeleteData} />
            </DeleteButtonContainer>
          </EmployeeCardContainer>
        )}
      </EmployeeCardsWrapper>
      <DeleteAlEmployeesButtonContainer>
        <Button name="REMOOVE AL EMPLOYEES" isRed onClick={}/>
      </DeleteAlEmployeesButtonContainer>
    </EmployeeContainer>
  );
}

export default Employee;
