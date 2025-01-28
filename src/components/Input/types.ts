import { ChangeEvent } from "react";

export interface InputProps {
  id?: string;
  name: string;
  type?: "text" | "email" | "password" | "telefon" | "url" | "number";
  placeholder?: string;
  label?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
