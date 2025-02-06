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

function CreateEmployee() {
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

  const formic = useFormik({
    initialValues: {
      name: "",
      surname: "",
      age: "",
      jobPosition: "",
    } as EmployeeDataTypes,
    validationSchema,
    validateOnChange: false,
    onSubmit: (formInputValues: EmployeeDataTypes) => {
      console.table(formInputValues);
    },
  });

  return (
    <CreateEmployeeContainer>
      <EmployeeForm onSubmit={formic.handleSubmit}>
        <InputsContainer>
          <Input
            id="name_id"
            name="name"
            type="text"
            label="Name*"
            placeholder="Enter your name"
            value={formic.values.name}
            onChange={formic.handleChange}
            errorMessage={formic.errors.name}
          />
          <Input
            id="surname_id"
            name="surname"
            type="text"
            label="Surname*"
            placeholder="Enter your surname"
            value={formic.values.surname}
            onChange={formic.handleChange}
            errorMessage={formic.errors.surname}
          />
          <Input
            id="age_id"
            name="age"
            type="number"
            label="Age*"
            placeholder="Enter your age"
            value={formic.values.age}
            onChange={formic.handleChange}
            errorMessage={formic.errors.age}
          />
          <Input
            id="jobPosition_id"
            name="jobPosition"
            type="text"
            label="Job Position"
            placeholder="Enter your job position"
            value={formic.values.jobPosition}
            onChange={formic.handleChange}
            errorMessage={formic.errors.jobPosition}
          />
        </InputsContainer>
        <ButtonContainer>
          <Button
            name="CREATE"
            type="submit"
            disabled={
              !(
                formic.values.name &&
                formic.values.surname &&
                formic.values.age
              )
            }
          />
        </ButtonContainer>
      </EmployeeForm>
    </CreateEmployeeContainer>
  );
}

export default CreateEmployee;
