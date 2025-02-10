import {
  ButtonContainer,
  CreateEmployeeContainer,
  EmployeeForm,
  InputsContainer,
} from "./styles";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import * as Yup from "yup";
import { useFormik } from "formik";
import { EmployeeDataTypes } from "./types";
import { useEffect, useContext } from "react";
import { v4 } from "uuid";
import { EmployeeDataContext } from "components/EmployeeLayout/EmployeeLayout";

function CreateEmployee() {
  const employee = useContext(EmployeeDataContext);
  console.log(employee);

  //достаем только функцию из контекста
  const { setEmployeeData } = employee;

  //контроль значений осуществляется через useFormik, значит
  // нам не нужно создавать стейты и функции для изменения значений при изменении инпутов

  //валидация формы при помощи formic
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("This fild is required")
      .test(
        "Check min name length",
        "Min 2 symbols",
        (value) => String(value).length >= 2
      )
      .test(
        "Check max name length",
        "Min 50 symbols",
        (value) => String(value).length <= 50
      ),
    surname: Yup.string()
      .required("This fild is required")
      .test(
        "Check min surname length",
        "Min 2 symbols",
        (value) => String(value).length >= 2
      )
      .test(
        "Check max surname length",
        "Min 50 symbols",
        (value) => String(value).length <= 50
      ),
    age: Yup.number()
      .required("This fild is required")
      .min(18, "Min age is 18 year")
      .max(80, "Max age is 80 year")
      .typeError("Age must be number"),
    jobPosition: Yup.string()
      .test(
        "Check min jobPosition length",
        "Min 2 symbols",
        (value) => String(value).length >= 2
      )
      .test(
        "Check max jobPosition length",
        "Min 80 symbols",
        (value) => String(value).length <= 80
      ),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      age: "",
      jobPosition: "",
    } as EmployeeDataTypes,
    validationSchema,
    validateOnChange: false,
    onSubmit: (formInputValues: EmployeeDataTypes) => {
      // Устанавливаем данные формы в стейт
      setEmployeeData({
        name: formInputValues.name,
        surname: formInputValues.surname,
        age: formInputValues.age,
        jobPosition: formInputValues.jobPosition,
      });
      // console.table(formInputValues);
      formik.resetForm();
    },
  });

  //проверяем наполнился ли стейт данными из формы
  // useEffect(()=>{
  //   if (employeeData) {
  //     console.log(employeeData);
  //   }
  // }, [employeeData]);

  return (
    <CreateEmployeeContainer id={v4()}>
      <EmployeeForm onSubmit={formik.handleSubmit}>
        <InputsContainer>
          <Input
            id="name_id"
            name="name"
            type="text"
            label="Name*"
            placeholder="Enter your name"
            value={formik.values.name}
            onChange={formik.handleChange}
            errorMessage={formik.errors.name}
          />
          <Input
            id="surname_id"
            name="surname"
            type="text"
            label="Surname*"
            placeholder="Enter your surname"
            value={formik.values.surname}
            onChange={formik.handleChange}
            errorMessage={formik.errors.surname}
          />
          <Input
            id="age_id"
            name="age"
            type="number"
            label="Age*"
            placeholder="Enter your age"
            value={formik.values.age}
            onChange={formik.handleChange}
            errorMessage={formik.errors.age}
          />
          <Input
            id="jobPosition_id"
            name="jobPosition"
            type="text"
            label="Job Position"
            placeholder="Enter your job position"
            value={formik.values.jobPosition}
            onChange={formik.handleChange}
            errorMessage={formik.errors.jobPosition}
          />
        </InputsContainer>
        <ButtonContainer>
          <Button
            name="CREATE"
            type="submit"
            disabled={
              !(
                formik.values.name &&
                formik.values.surname &&
                formik.values.age
              )
            }
          />
        </ButtonContainer>
      </EmployeeForm>
    </CreateEmployeeContainer>
  );
}

export default CreateEmployee;
