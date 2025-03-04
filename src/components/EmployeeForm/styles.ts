import { css } from "@emotion/react";
import styled from "@emotion/styled";

const boxModel = css`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const EmployeeFormContainer= styled.form`
${boxModel}
gap: 30px;
background-color: aliceblue;
border: 1px solid black;
border-radius: 4px;
min-width: 500px;
height: fit-content;
padding: 40px;
`

export const InputsContainer = styled.div`
${boxModel}
gap: 10px;
width: 100%;
`

export const CheckboxContainer = styled.div`
align-self: flex-start;
display: flex;
gap: 20px;
`
export const CheckboxLabel = styled.label`
font-size: 20px;
`

export const Checkbox = styled.input`
 width: 25px;
 height: 25px;
`
