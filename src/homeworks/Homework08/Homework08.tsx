import Button from "../../components/Button/Button";
import { HW08ContaineStyled, ButtonContainerStyled } from "./styles";

function Homework08() {
  return (
    <HW08ContaineStyled>
      <ButtonContainerStyled>
        <Button name="ABLED BUTTON" />
      </ButtonContainerStyled>
      <ButtonContainerStyled>
        <Button name="DISABLED BUTTON" disabled/>
      </ButtonContainerStyled>
    </HW08ContaineStyled>
  );
}

export default Homework08;
