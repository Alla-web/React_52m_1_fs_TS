import { ChangeEvent, useState, FormEvent } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { LoginFormContainer, Title, InputsContainer } from "./styles";

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log(event);
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    
  };

  return (
    <LoginFormContainer onSubmit={onLogin}>
      <Title>Login form</Title>
      <InputsContainer>
        {/* <input onChange={(event: ChangeEvent<HTMLInputElement>)=>{console.log(event);
      }}/> */}
        <Input
          name="email"
          label="Email"
          value={email}
          onChange={onEmailChange}
          placeholder="Enter your email"
        />
        <Input
          name="password"
          label="Password"
          value={password}
          onChange={onPasswordChange}
          placeholder="Enter your password"
        />
      </InputsContainer>
      <Button type="submit" name="Login" />
    </LoginFormContainer>
  );
}

export default LoginForm;
