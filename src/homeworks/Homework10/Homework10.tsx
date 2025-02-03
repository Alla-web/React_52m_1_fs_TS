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
import Spinner from "../../components/Spinner/Spinner";

function Homework10() {
  const [firstState, setFirstState] = useState<string | undefined>("");
  const [secondState, setSecondState] = useState<string | undefined>("");
  const [dogUrlFirst, setDogUrlFirst] = useState<string>("");
  const [dogUrlSecond, setDogUrlSecond] = useState<string>("");
  const [errorState, setErrorState] = useState<undefined | string>(undefined);
  const [isLoading, setLoading] = useState<boolean>(false);

  //контролируем наши инпуты
  const onChangeFirst = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstState(event.target.value);
  };

  const onChangeSecond = (event: ChangeEvent<HTMLInputElement>) => {
    setSecondState(event.target.value);
  };

  const QWERY_URL = "https://dog.ceo/api/breeds/image/random";

  const getDataFirst = async () => {
    //очистки состояний
    setDogUrlFirst("");
    setErrorState(undefined);
   
    try {
      setLoading(true);
      const result = await axios.get(QWERY_URL);
      const data = result.data;
      console.log(result);
      setDogUrlFirst(data.message);
      console.log(firstState);
    } catch (error: any) {
      setErrorState(`${error.status}: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const getDataSecond = async () => {
    //очистки состояний
    setDogUrlSecond("");
    setErrorState(undefined);
   
    try {
      setLoading(true);
      const result = await axios.get(QWERY_URL);
      const data = result.data;
      setDogUrlSecond(data.message);
    } catch (error: any) {
      setErrorState(`${error.status}: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  //отправлять запросы каждый раз при изменении значения в Input
  useEffect(() => {
    if (firstState) {
      getDataFirst();
    }
  }, [firstState]);

  useEffect(() => {
    if (secondState) {
      getDataSecond();
    }
  }, [secondState]);

  return (
    <Homework10Container>
      <InputsContainer>
        <Input
          name="first"
          value={firstState}
          onChange={onChangeFirst}
          placeholder="Enter something"
        />
        <Input
          name="second"
          value={secondState}
          onChange={onChangeSecond}
          placeholder="Enter something"
        />
      </InputsContainer>
      {isLoading && <Spinner/>}
      {(dogUrlFirst || dogUrlSecond) && (
        <ResultsContainer>
          {dogUrlFirst && <ResultImg src={dogUrlFirst} alt="First photo" />}
          {dogUrlSecond && <ResultImg src={dogUrlSecond} alt="Second photo" />}
        </ResultsContainer>
      )}
      {errorState && <ErrorBlock>{errorState}</ErrorBlock>}
    </Homework10Container>
  );
}

export default Homework10;
