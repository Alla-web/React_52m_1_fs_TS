import {
  Checkbox,
  CheckboxContainer,
  CheckboxLabel,
  EmployeeFormContainer,
  InputsContainer,
} from "./styles";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { EmployeeFormValues } from "./types";

function EmployeeForm() {
  const validationSchema = Yup.object().shape({
    //список полей с названием из атрибута name инпутов в форме
    fullName: Yup.string()
      .required("Field fullname is required")
      .test(
        "Check min fullname length",
        "Min 5 sumbols",
        (value) => String(value).length >= 5
      )
      .test(
        "Check max fullname length",
        "Max 50 sumbols",
        (value) => String(value).length <= 50
      ),
    // .typeError("Fullname must be string") - для строк не обязательно
    age: Yup.number()
      .required("Age is required fild")
      .min(18, "Min age is 18 year")
      .max(80, "Max age is 80 year")
      .typeError("Age must be number"),
    jobTitle: Yup.string()
      .test(
        "Check max fullname length",
        "Max 30 sumbols",
        (value) => String(value).length <= 30
      )
      .typeError("Jobtitle must be string"),
  });

  const formik = useFormik({
    //задаём первоначальные значения
    initialValues: {
      fullName: "",
      age: "",
      jobTitle: "",
      agreement: false,
    } as EmployeeFormValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: (formInputsValues: EmployeeFormValues) => {
      console.table(formInputsValues);
    },
  });

  return (
    <EmployeeFormContainer onSubmit={formik.handleSubmit}>
      <InputsContainer>
        <Input
          id="fullNameInput"
          type="text"
          name="fullName"
          label="Full Name*"
          placeholder="Enter your fullname"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          errorMessage={formik.errors.fullName}
        />
        <Input
          id="ageInput"
          //   type="number"
          name="age"
          label="Age*"
          placeholder="Enter your age"
          value={formik.values.age}
          onChange={formik.handleChange}
          errorMessage={formik.errors.age}
        />
        <Input
          id="jobTitleInput"
          type="text"
          name="jobTitle"
          label="Job Title"
          placeholder="Enter your jobtitle"
          value={formik.values.jobTitle}
          onChange={formik.handleChange}
          errorMessage={formik.errors.jobTitle}
        />
        {/* <Input 
        id='checkboxInput' 
        name='agreement' 
        type='checkbox' 
        label="I agree"
        checked={formik.values.agreement}
        onChange={formik.handleChange}
        /> */}
      </InputsContainer>
      <CheckboxContainer>
        <Checkbox
          type="checkbox"
          id="checkboxInput"
          name="agreement"
          checked={formik.values.agreement}
          onChange={formik.handleChange}
        />
        <CheckboxLabel htmlFor="checkboxInput">I agree</CheckboxLabel>
      </CheckboxContainer>
      <Button name="CREATE" type="submit" disabled={!formik.values.agreement} />
    </EmployeeFormContainer>
  );
}

export default EmployeeForm;
