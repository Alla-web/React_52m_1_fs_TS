import { ChangeEvent, useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import {
  ButtonsContainer,
  ErrorBlock, 
  Lesson11Container,
  ResuiltsContainer,
  ResultsItem,
} from "./styles";
import axios from "axios";
import { v4 } from "uuid";

function Lesson11() {
  //делаем state для результатов запроса для хранения результатов
  const [reusltsState, setResultsState] = useState<string[]>([]);

  //делаем state для error для хранения ошибок
  const [errorState, setErrorState] = useState<undefined | string>(undefined);
  console.log(errorState);

  const SEARCH_URL = "https://catfact.ninja/fact";

  const getData = async () => {
    //очистки перед запуском
    setErrorState("");

    try {
      const result = await axios.get(SEARCH_URL);
      console.log(result);
      const data = result.data.fact;
      //   console.log(data);
      setResultsState((prevState) => [...prevState, data]);
    } catch (error: any) {
      // console.log(error);
      setErrorState(`${error.code}: ${error.message}`);
    } finally {
    }
  };

  const catFacts = reusltsState.map((value) => (
    <ResultsItem>{value}</ResultsItem>
  ));

  const deleteData = () => {
    setResultsState([]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Lesson11Container key={v4()}>
      <ButtonsContainer>
        <Button name="GET MORE INFO" onClick={getData} />
        {reusltsState.length > 0 && (
          <Button name="DELETE DATA" isRed onClick={deleteData} />
        )}
      </ButtonsContainer>
      {reusltsState.length > 0 && (
        <ResuiltsContainer>
          {catFacts}
        </ResuiltsContainer>
      )}
      {errorState && <ErrorBlock>{errorState}</ErrorBlock>}
    </Lesson11Container>
  );
}

export default Lesson11;
