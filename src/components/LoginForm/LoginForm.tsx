// import { ChangeEvent, useState, FormEvent } from "react";
import { Formik, useFormik } from "formik";

import Button from "../Button/Button";
import Input from "../Input/Input";
import { LoginFormContainer, Title, InputsContainer } from "./styles";
import { LoginFormValues } from "./types";
import * as Yup from "yup";
import { ChangeEvent } from "react";

function LoginForm (){
    return(
        <LoginFormContainer>
            <Title>Login form</Title>
            <InputsContainer>
                <Input name='email' />
                <Input name='password' />
            </InputsContainer>
            <Button/>
        </LoginFormContainer>
    );
function LoginForm() {
  //БУДЕМ КОНТРОЛИРОВАТЬ ФОРМУ ПРИ ПОМОЩИ ФОРМИКА, ПОЭТОМУ КОММЕНТИРУЕМ ПРЕЖНИЙ ВАРИАНТ КОНТРОЛЯ
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  // const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   // console.log(event);
  //   setEmail(event.target.value);
  // };

  // const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  // };

  //минимум 8 символов, специальный символ и хотя бы одна заглавная буква
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  //------------Создание валидационной схемы с помощью Yup
  //можно назвать эту переменную validationSchema и тогда она автоматически подтянется в стр 62
  //без указания
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Field email is required")
      .email("Field has type email")
      .max(15, "Max 15 symbols")
      .min(5, "Min 5 symbols")
      .typeError("Email must be string"),
    // password: Yup.number()
    //   .required("Field password is required")
    //   .typeError("Password must be number")
    //   .test(
    //     "Check min password length",
    //     "Min 8 sumbols",
    //     (value) => String(value).length >= 10
    //   )
    //   .test(
    //     "Check max] password length",
    //     "Max 20 sumbols",
    //     (value) => String(value).length <= 20
    //   ),
    password: Yup.string()
    password: Yup.string()
      .required('Required')
      .matches(passwordRegex, 'Password must be at least 8 characters long, include uppercase, lowercase and special character')
  });

  //-------------Настройка формы под её определённые поля
  // useFormik() как аргумент принимает объект настройки, для определённой формы
  // при вызове useFormik() возвращает объект, в котором хранятся значения из полей, ошибки,
  // и различные методы для работы с формой

  //хук useFormik возвращает объект со значениями полей, функциями и ошибками
  const formik = useFormik({
    //в объекте 2 обязательных cвойства: initialValues, onSubmit
    // initialValues - это объект, где ключчями являются значения атрибута name input формы, а
    // значениями - значения при первичной загрузке компонента
    initialValues: {
      email: "",
      password: "",
    } as LoginFormValues,
    //validationSchema - свойство, в значении которого нужно указать переменную со схемой валидации
    validationSchema: schema,
    // свойство validateOnChange по умолчанию true, значит валидация будет происходить при каждом изменении в форме
    validateOnChange: false,
    // onSubmit - функция, которая будет вызвана при событии submit для
    // формы, как аргумент принимает только значения инпутов
    onSubmit: (formInputsValues: LoginFormValues) => {
      console.table(formInputsValues);
    },
  });

  console.log(formik);

  //если при изменении только пароль должен проверяться - создаём отдельную логику через event
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue('password', event.target.value)
    formik.validateField('password')
  }

  return (
    //Для выполнения функции, которая прописана в свойстве onSubmit в настройке formik, в атрибут onSubmit
    //для формы передаём formik.handleSubmit
    <LoginFormContainer onSubmit={formik.handleSubmit}>
      <Title>Login form</Title>
      <InputsContainer>
        {/* <input onChange={(event: ChangeEvent<HTMLInputElement>)=>{console.log(event);
      }}/> */}

        {/* Для контроля полей необходимо передать значения в prop value onchange:
          value={formik.values.<значение name для input>}
          onChange={formik.handleChange} */}
        <Input
          name="email"
          label="Email*"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Enter your email"
          errorMessage={formik.errors.email}
        />
        <Input
          name="password"
          label="Password*"
          value={formik.values.password}
          // onChange={formik.handleChange} - если при изменении только пароль должен проверяться
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          errorMessage={formik.errors.password}
        />
      </InputsContainer>
      <Button type="submit" name="Login" />
    </LoginFormContainer>
  );
}

export default LoginForm;
