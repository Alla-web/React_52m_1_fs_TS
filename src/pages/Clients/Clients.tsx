import { ClientsPage, Title } from "./styles";
import { Link } from "react-router-dom";

function Clients (){
    return(
        <ClientsPage>
            <Title>Select client:</Title>
            <Link to='BMW'>Go to BMW page</Link>
            <Link to='Ferrari'>Go to Ferrari page</Link>
            <Link to='VW'>Go to VW page</Link>
        </ClientsPage>
    );
}

export default Clients;