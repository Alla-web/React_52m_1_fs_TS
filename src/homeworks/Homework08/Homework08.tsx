import Button from "../../components/Button/Button";
import { HW08ContaineStyled, ButtonContainerStyled } from "./styles";

function Homework08() {
  return (
    <HW08ContaineStyled>
      <ButtonContainerStyled>
        <Button name="ABLED BUTTON" type="button" />
      </ButtonContainerStyled>
      <ButtonContainerStyled>
        <Button name="DISABLED BUTTON" disabled type="button" />
      </ButtonContainerStyled>
    </HW08ContaineStyled>
  );
}

export default Homework08;
