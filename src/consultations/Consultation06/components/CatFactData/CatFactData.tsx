import Button from "components/Button/Button";
import { CatFactDataContainer, FactItem, FactItemControl, Fact, ButtonControl } from "./styles";
import { useContext } from "react";
import {CatFactRandomizerContext} from "../CatFactRandomizer/CatFactRandomizer"

function CatFactData (){
    //Шаг 5. 
    const catFact = useContext(CatFactRandomizerContext);
    return(
        <CatFactDataContainer>
            <FactItem>             
                <FactItemControl>
                    <Fact>Hello cat!</Fact>
                    <ButtonControl>
                        <Button name="DELETE" isRed/>
                    </ButtonControl>
                </FactItemControl>
            </FactItem>            
        </CatFactDataContainer>
    );
}

export default CatFactData;