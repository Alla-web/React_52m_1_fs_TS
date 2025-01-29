import { ChangeEvent, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {
  Homework09Container,
  InputButtonContainer,
  InputsContainer,
  ResultValueContainer,
  ResultsContainer,
} from "./styles";

function Homework09() {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };
  return (
    <Homework09Container>
      <InputButtonContainer>
        <InputsContainer>
          <Input
            name="email"
            label="Email"
            placeholder="Enter your email"
            value={emailValue}
            onChange={onChangeEmail}
          />
          <Input
            name="password"
            label="Password"
            placeholder="Enter your password"
            value={passwordValue}
            onChange={onChangePassword}
          />
        </InputsContainer>
        <Button type="button" />
      </InputButtonContainer>
      <ResultsContainer>
        <ResultValueContainer>{emailValue}</ResultValueContainer>
        <ResultValueContainer>{passwordValue}</ResultValueContainer>
      </ResultsContainer>
    </Homework09Container>
  );
}

export default Homework09;
