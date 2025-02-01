import { ChangeEvent, useEffect, useState } from "react";
import Button from "components/Button/Button";
import Spinner from "components/Spinner/Spinner";
import {
  Lesson10Wrapper,
  ButtonWrapper,
  ResultBlock,
  ErrorBlock,
  InputContainer,
} from "./styles";
import axios from "axios";
import Input from "components/Input/Input";

function Lesson10() {
  const [joke, setJoke] = useState<string>("");
  //state для ошибки
  const [error, setError] = useState<undefined | string>(undefined);
  //state для Loading
  const [isLoading, setLoading] = useState<boolean>(false);
  //state для ???
  const [jokeValue, setJokeValue] = useState<string>("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setJokeValue(event.target.value);
  };

  //пример запроса с fetch
  //   const fetchJokeData = async () => {
  //     const JOKE_URL: string = "https://official-joke-api.appspot.com/random_joke";
  //     try {
  //       const response = await fetch(JOKE_URL);
  //       const result = await response.json();
  //       if (response.ok) {
  //         console.log(result);

  //         //сохраняем в стейт данные, которые пришли в ответе, в том формате,
  //         // который нам нужен для отображения шутки - строка
  //         setJoke(`${result.setup} - ${result.punchline}`);
  //       } else {
  //         throw new Error("API Error");
  //       }
  //     } catch (error: any) {
  //       console.log(error.message);
  //     } finally {
  //       console.log("End");
  //     }

  //пример запроса мс ипользваниме axios
  const fetchJokeData = async () => {
    const JOKE_URL: string =
      "https://official-joke-api.appspot.com/random_joke";

    //перед отправкой запроса очищаем наши контейнеры от шутки и сообщения об ошибке
    setJoke("");
    setError(undefined);

    try {
      setLoading(true);
      const result = await axios.get(JOKE_URL);
      const data = result.data;
      console.log(data);
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error: any) {
      console.log(error);
      setError(`${error.status}: ${error.message}`);
    } finally {
      setLoading(false); 
    }
  };

  //отправлять запрос при загрузке страницы
  useEffect(() => {
    fetchJokeData();
  }, []);

  //отправлять запрос каждый раз при изменении значения в Input
  useEffect(() => {
    fetchJokeData();
  }, [jokeValue]);

  return (
    <Lesson10Wrapper>
      <ButtonWrapper>
        <Button name="GET JOKE" onClick={fetchJokeData} />
      </ButtonWrapper>
      <InputContainer>
        <Input name="joke" value={jokeValue} onChange={onChange} />
      </InputContainer>
      {isLoading && <Spinner />}
      {joke && <ResultBlock>{joke}</ResultBlock>}
      {error && <ErrorBlock>{error}</ErrorBlock>}
    </Lesson10Wrapper>
  );
}

export default Lesson10;
