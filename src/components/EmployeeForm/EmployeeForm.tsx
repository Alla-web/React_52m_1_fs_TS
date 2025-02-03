import Input from "components/Input/Input";
import { EmployeeFormContainer, InputsContainer } from "./styles";
import Button from "components/Button/Button";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { EmployeeFormValues } from "./types";

function EmployeeForm() {
  const schema = Yup.object().shape({
    fullName: Yup.string()
      .required("Field fullname is required")
      .test(
        "Check min fullname length",
        "Min 5 sumbols",
        (value) => String(value).length < 5
      )
      .test(
        "Check min fullname length",
        "Max 50 sumbols",
        (value) => String(value).length > 50
      )
      .typeError("Fullname must be string"),
    age: Yup.number()
      .min(18, "Min 18 symbols")
      .max(80, "Max 80 symbols")
      .typeError("Age must be number"), 
    jobTitle: Yup.string()
      .test(
        "Check min fullname length",
        "Max 30 sumbols",
        (value) => String(value).length > 30
      )
      .typeError("Jobtitle must be string"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      age: "",
      jobTitle: "",
    } as EmployeeFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (formInputsValues: EmployeeFormValues) => {
      console.table(formInputsValues);
    },
  });

  return (
    <EmployeeFormContainer>
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
          type="number"
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
      </InputsContainer>
      <Button name="Create" type="submit"/>
    </EmployeeFormContainer>
  );
}

export default EmployeeForm;
