import { ClientsPage, Title, StyledLinks } from "./styles";
import { Link } from "react-router-dom";

function Clients (){
    return(
        <ClientsPage>
            <Title>Select client:</Title>
            {/* если мы не стилизуем сами ссылки, а применяем встроенные стили, используем обёртку Link */}
            {/* <Link to='BMW'>Go to BMW page</Link> */}
            <StyledLinks to='BMW'>Go to BMW page</StyledLinks>
            <StyledLinks to='Ferrari'>Go to Ferrari page</StyledLinks>
            <StyledLinks to='VW'>Go to VW page</StyledLinks>
        </ClientsPage>
    );
}

export default Clients;