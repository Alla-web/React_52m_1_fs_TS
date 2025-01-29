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
import { BoxInfo } from "../../lessons/Lesson08/styles";

function Homework09() {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState("");
  const [prevStateButton, setPrevStateButton] = useState<boolean>(false);

  //добавляем 2 дополнительных state для хранения значений, которые должны отобразиться
  //в момент появления блока
  const [emailResult, setEmailResult] = useState<string>("");
  const [passwordResult, setPasswordResult] = useState<string>("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);

    setEmailValue(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };

  const showResults = () => {
    //
    setEmailResult(emailValue);
    setPasswordResult(passwordValue);

    // setPrevStateButton(true);
    setPrevStateButton(true);
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
        {/*                                                    emailValue === '' || passwordValue === ''*/}
        <Button type="button" onClick={showResults} disabled={!emailValue.trim() || !passwordValue.trim()}/>
      </InputButtonContainer>
      {/* не null, undefind, 0, NaN, '' */}
      {(emailValue || passwordValue) && (
        <ResultsContainer>
          <ResultValueContainer>{emailValue}</ResultValueContainer>
          <ResultValueContainer>{passwordValue}</ResultValueContainer>
        </ResultsContainer>
      )}
    </Homework09Container>
  );
}

export default Homework09;
