import { InputProps } from "./types";
import { InputContainerStyled, InputElementStyled, Label } from "./styles"; 

function Input({ id, name, type = 'text', placeholder, label }: InputProps) {
  return (
    <InputContainerStyled>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputElementStyled
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </InputContainerStyled>
  );
}

export default Input;
