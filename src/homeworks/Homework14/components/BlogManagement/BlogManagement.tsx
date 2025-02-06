//Шаг 1. Импортируем createContext
import { ChangeEvent, createContext, useContext, useState } from "react";
import { BlogManagementContainer } from "./styles";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Card from "../Card/Card";

//Шаг 2. Создаём хранилище - контекст, с помощью функции createContext
// и делаем экспорт, чтобы затем использовать для создания
export const MessageContext = createContext<string>("");

function BlogManagemet() {
  const [inputValue, setinpitValue] = useState<string>("");
  const [postMessage, setPostMessage] = useState<string>("");

  const onChangeInpit = (event: ChangeEvent<HTMLInputElement>) => {
    setinpitValue(event.target.value);
  };

  const onPostMessage = ()=> {
    setPostMessage(inputValue)
  }
  // console.log(onPostMessage);
  
  return (
    // Шаг 3. Создаём обёртку (provider), которая позволит получить значение из контекста
    // в любом компоненте, который будет вложен в компонент с обёрткой (внут, правнут)
    //в провайдере добавляем значение, к которому и необходим доступ (userData)
    <MessageContext.Provider value={postMessage}>
      <BlogManagementContainer>
        <Input name="message" type="text" value={inputValue} onChange={onChangeInpit}/>
        <Button name="POST" onClick={onPostMessage} />
        <Card />
      </BlogManagementContainer>
    </MessageContext.Provider>
  );
}

export default BlogManagemet;
