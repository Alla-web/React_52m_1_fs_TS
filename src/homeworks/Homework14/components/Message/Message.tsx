import { useContext } from "react";
import { MessageContainer, MessageItem } from "./styles";
import { MessageContext } from "../BlogManagement/BlogManagement";

function Message() {
  //принимаем значение в useContext из MessageContext в BlogManagement
  const message = useContext(MessageContext);
  return (
    <MessageContainer>
      <MessageItem>{message}</MessageItem>
    </MessageContainer>
  );
}

export default Message;
