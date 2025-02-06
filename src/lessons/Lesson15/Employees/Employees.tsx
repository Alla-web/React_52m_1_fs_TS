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

function Employee() {
  return (
    <EmployeeContainer>
      <EmployeeCardsWrapper>
        <EmployeeCardContainer>
            <TitleValueContainer>
                <StringTitle>Name</StringTitle>
                <StingValue>Alla</StingValue>
            </TitleValueContainer>
            <TitleValueContainer>
                <StringTitle>Surname</StringTitle>
                <StingValue>Alla</StingValue>
            </TitleValueContainer>
            <TitleValueContainer>
                <StringTitle>Age</StringTitle>
                <StingValue>41</StingValue>
            </TitleValueContainer>
            <TitleValueContainer>
                <StringTitle>Job position</StringTitle>
                <StingValue>WebDeveloper</StingValue>
            </TitleValueContainer>
          <DeleteButtonContainer>
            <Button name="DELETE" isRed />
          </DeleteButtonContainer>
        </EmployeeCardContainer>     
        <EmployeeCardContainer>
            <TitleValueContainer>
                <StringTitle>Name</StringTitle>
                <StingValue>Alla</StingValue>
            </TitleValueContainer>
            <TitleValueContainer>
                <StringTitle>Surname</StringTitle>
                <StingValue>Alla</StingValue>
            </TitleValueContainer>
            <TitleValueContainer>
                <StringTitle>Age</StringTitle>
                <StingValue>40</StingValue>
            </TitleValueContainer>
            <TitleValueContainer>
                <StringTitle>Job position</StringTitle>
                <StingValue>WebDeveloper</StingValue>
            </TitleValueContainer>
          <DeleteButtonContainer>
            <Button name="DELETE" isRed />
          </DeleteButtonContainer>
        </EmployeeCardContainer>
      </EmployeeCardsWrapper>
      <DeleteAlEmployeesButtonContainer>
        <Button name="REMOOVE AL EMPLOYEES" isRed />
      </DeleteAlEmployeesButtonContainer>
    </EmployeeContainer>
  );
}

export default Employee;
