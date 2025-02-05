//Шаг 1. Импортируем createContext
import { createContext, useContext, useState } from "react";
import { BlogManagementContainer } from "./styles";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Card from "../Card/Card";
import { BlogManagementType, MessageType } from "./types";

//Шаг 2. Создаём хранилище - контекст, с помощью функции createContext
// и делаем экспорт, чтобы затем использовать для создания
const BlogManagementContext = createContext<BlogManagementType>({
  inputMessage: undefined,
  onClick: () => {},
});

function BlogManagemet() {
  const [message, setMessage] = useState<MessageType | undefined>(undefined);

  return (
    // Шаг 3. Создаём обёртку (provider), которая позволит получить значение из контекста
    // в любом компоненте, который будет вложен в компонент с обёрткой (внут, правнут)
    //в провайдере добавляем значение, к которому и необходим доступ (userData)   
    <BlogManagementContext.Provider
      value={{
        inputMessage: message,
        onClick: setMessage,
      }}                         
    >
      <BlogManagementContainer>
        <Input name="message" type="text" />
        <Button name="POST" onClick={() => {}} />
        <Card />
      </BlogManagementContainer>
    </BlogManagementContext.Provider>
  );
}

export default BlogManagemet;
