import { ChangeEvent, useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {
  ButtonsContainer,
  ErrorBlock,
  InputButtonContainer,
  Lesson11Container,
  ResuiltsContainer,
  ResultsItem,
} from "./styles";
import axios from "axios";

function Lesson11() {
  //делаем state для результатов для хранения результатов
  const [reusltsState, setResultsState] = useState<string[]>([]);

  //делаем state для error для хранения ошибок
  const [errorState, setErrorState] = useState<undefined | string>(undefined);
  console.log(errorState);

  //берём под контроль инпут
  const [inputValue, setInputValue] = useState<undefined | string>(undefined);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

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

  const deleteData = () => {
    setResultsState([]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Lesson11Container>
      <InputButtonContainer>
        <Input name="search" onChange={onChange}/>
        <ButtonsContainer>
          <Button name="GET MORE INFO" onClick={getData} />
          {reusltsState.length > 0 && (
            <Button name="DELETE DATA" isRed onClick={deleteData} />
          )}
        </ButtonsContainer>
      </InputButtonContainer>
      {reusltsState.length > 0 && (
        <ResuiltsContainer>
          {reusltsState.map((value, index) => (
            <ResultsItem key={index}>{value}</ResultsItem>
          ))}
        </ResuiltsContainer>
      )}
      {errorState && <ErrorBlock>{errorState}</ErrorBlock>}
    </Lesson11Container>
  );
}

export default Lesson11;
