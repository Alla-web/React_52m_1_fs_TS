//сборщик упрощает импорт стилей только в компонент
import "./styles.css";
import { ButtonProps } from "./types";

//создаём интерфейс и переносим его в отдельный файл
// interface ButtonProps {
//   name?: string;
//   type: "submit" | "button" | "reset";
//   onClick: () => void;
// }

function Button({ name = "SEND", type = "button", onClick }: ButtonProps) {
  return (
    <button className="main-button" type={type} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
