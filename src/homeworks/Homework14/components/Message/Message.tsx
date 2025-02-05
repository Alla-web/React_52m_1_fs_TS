import { useContext } from "react";
import { MessageContainer, MessageItem } from "./styles";
import { MessageContext } from "../BlogManagement/BlogManagement";

function Message (){

   const message = useContext(MessageContext);
    return(
        <MessageContainer>
            <MessageItem>{message}</MessageItem>
        </MessageContainer>
    );
}

export default Message;