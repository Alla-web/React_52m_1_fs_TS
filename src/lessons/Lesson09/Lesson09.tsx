import { ChangeEvent, useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import { Lesson09Container, InputContainer, Result } from "./styles";

function Lesson09() {
  //до этих пор у нас нет контролируемых объектов, т.к. мы не создавали локальное хранилище useState()
  //Создаём контролируемый компонент - состояние которого, хранится внутри компонента React и
  //мы можем контролировать его изменение
  //1-й шаг - создание стейта, где мы будем хранить значение инпута
  //деструктуризация стейта:
  const [userNameValue, setUserNameValue] = useState<string>("Alla");
  const [userAgeValue, setUserAgeValue] = useState<string>("18");
  // console.log('Input works');

  //2-й шаг - создание функции, которая будет забирать введённое пользователем значение из
  // объекта event и сохранять его в state
  const onChangeNameInput = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setUserNameValue(`${event.target.value}`);
  };
 

  const onChangeAgeInput = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setUserAgeValue(`${event.target.value}`);
  };

  // console.log('Get Data');

  //1-й случай:
  //useeffect на стадии монтирования/визуализации компонента (первый рендер):
  //чтобы функция (1-й аргумент) выполнилась только 1 раз при первом рендере страницы
  //передаётся пустой массив
  useEffect(() => {
    console.log("Mounting");
  }, []);

  //2-й случай:
  //useeffect на стадии обновления компонента (первый рендер):
  //чтобы функция (1-й аргумент) выполнилась при изменении значения в 1-м инпуте
  // передаётся массив зависимостей уже не пустой, а с тем state, при изменении которого нужно
  // выполнить функцию
  // props и state только могут вызывать перерендеринг (помимо первичной загрузки), поэтому их только
  // и передают в массив useeffect
  useEffect(() => {
    console.log("Updating");
  }, [userNameValue]);

  //3-й случай:
  //useEffect при размонтировании компонента (до момента удаления)
  //Чтобы функция (1-й аргумент) выполнилась один раз, но непосредственно перед удалением компонента
  //в первом аргументе (функции) необходимо вернуть другую функцию, которая и будет выполнять перед размонтированием
  //2-й аргумент - пустой массив зависимостей
  useEffect(() => {
    return ()=>{console.log('Unmaunting');
    }
  }, []);

  return (
    <Lesson09Container>
      <InputContainer>
        <Input
          name="user_name"
          label="User Name"
          id="name_id"
          placeholder="Enter your name"
          value={userNameValue}
          onChange={onChangeNameInput}
        />
        <Result>{userNameValue}</Result>
      </InputContainer>
      <InputContainer>
        <Input
          name="user_age"
          label="User age"
          id="_id"
          placeholder="Enter your age"
          value={userAgeValue}
          onChange={onChangeAgeInput}
        />
        <Result>{userAgeValue}</Result>
      </InputContainer>
    </Lesson09Container>
  );
}

export default Lesson09;
