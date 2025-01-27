import { InputProps } from "./types";
import { InputContainerStyled, InputElementStyled } from "./styles"; 

function Input({ id, name, type = 'text', placeholder, label }: InputProps) {
  return (
    <InputContainerStyled>
      {label && <label htmlFor={id}>{label}</label>}
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
