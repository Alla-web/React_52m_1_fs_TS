import { CardContainer, Name } from "./styles";
import Message from "../Message/Message";
import { useContext } from "react";
import { MessageContext } from "../BlogManagement/BlogManagement";

function Card() {
   //принимаем значение в useContext из MessageContext в BlogManagement
    const isMessage = useContext(MessageContext);
  return (
    //посмотреть как у Катерины через пропс
    (!!isMessage) && <CardContainer>
      <Name>Alla Nazarenko</Name>
      <Message/>
    </CardContainer>
  );
}

export default Card;
