import {
  ErrorBlock,
  Homework10Container,
  InputsContainer,
  ResultImg,
  ResultsContainer,
} from "./styles";
import Input from "../../components/Input/Input";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

function Homework10() {
  const [firstState, setFirstState] = useState<string | undefined>("");
  const [secondState, setSecondState] = useState<string | undefined>("");
  const [errorState, setErrorState] = useState<undefined | string>(undefined);

  //контролируем наши инпуты
  const onChangeFirst = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstState(event.target.value);
  };

  const QWERY_URL = "https://dog.ceo/api/breeds/image/random";

  const getDataFirst = async () => {
    //очистки состояний
    setFirstState("");
    setErrorState(undefined);

    try {
      const result = await axios.get(QWERY_URL);
      const data = result.data;
      console.log(result);
      setFirstState(data.message);
    } catch (error: any) {
      setErrorState(`${error.status}: ${error.message}`);
    } finally {
    }
  };

  const getDataSecond = async () => {
    //очистки состояний
    setSecondState("");
    setErrorState(undefined);
    try {
      const result = await axios.get(QWERY_URL);
      const data = result.data;
      setSecondState(data.message);
    } catch (error: any) {
      setErrorState(`${error.status}: ${error.message}`);
    } finally {
    }
  };

  //отправлять запросы каждый раз при изменении значения в Input
  // useEffect(() => {
  //   if (firstState !== "") {
  //     getDataFirst();
  //   }
  // }, [firstState]);

  // useEffect(() => {
  //   if (secondState !== "") {
  //     getDataSecond();
  //   }
  // }, [secondState]);

  return (
    <Homework10Container>
      <InputsContainer>
        <Input
          name="first"
          placeholder="Enter something"
          onChange={getDataFirst}
        />
        <Input
          name="second"
          placeholder="Enter something"
          onChange={getDataSecond}
        />
      </InputsContainer>
      {(firstState || secondState) && (
        <ResultsContainer>
          {firstState && <ResultImg src={firstState} alt="First photo" />}
          {secondState && <ResultImg src={secondState} alt="Second photo" />}
        </ResultsContainer>
      )}
      {errorState && <ErrorBlock>{errorState}</ErrorBlock>}
    </Homework10Container>
  );
}

export default Homework10;
