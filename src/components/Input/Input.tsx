import { InputProps } from "./types";
import { InputContainerStyled, InputElementStyled, Label } from "./styles"; 

function Input({ id, name, type = 'text', placeholder, label, value, onChange }: InputProps) {
  return (
    <InputContainerStyled>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputElementStyled
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputContainerStyled>
  );
}

export default Input;
