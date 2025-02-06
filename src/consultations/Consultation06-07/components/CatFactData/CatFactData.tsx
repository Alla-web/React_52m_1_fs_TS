import Button from "components/Button/Button";
import {
  CatFactDataContainer,
  FactItem,
  FactItemControl,
  Fact,
  ButtonControl,
} from "./styles";
import { useContext } from "react";
import { CatFactRandomizerContext } from "../CatFactRandomizer/CatFactRandomizer";
import { log } from "console";

function CatFactData() {
  //Шаг 5.
  const catFact = useContext(CatFactRandomizerContext);
  console.log(catFact);

  const { data, setCatFactData } = catFact;

  const onDelete = (id: any) => {
    setCatFactData((prevValue: any[]) => {
      return prevValue.filter((factObj: any) => factObj.id !== id);
    });
  };

  const catFacts = data.map((value) => {
    return (
      <FactItem key={value.id}>
        <FactItemControl>
          <Fact>{value.fact}</Fact>
          <ButtonControl>
            <Button name="DELETE" isRed onClick={() => onDelete(value.id)} />
          </ButtonControl>
        </FactItemControl>
      </FactItem>
    );
    //кнопка удалить все факты
    //создать toDoList - в инпут вводим задание, задание попападет в список, 
    // добавляется в список дел до бесконечности. При нажатии на это дело оно удаляется
  });

  return <CatFactDataContainer>{catFacts}</CatFactDataContainer>;
}

export default CatFactData;
