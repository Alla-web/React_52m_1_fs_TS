import styled from "@emotion/styled";
import { css } from "@emotion/react";

const boxBasicStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Homework09Container = styled.div`
  ${boxBasicStyles}
  gap: 30px;
  padding: 50px;
  flex: 1;
`;

export const InputButtonContainer = styled.div`
  ${boxBasicStyles}
  gap: 40px;
  padding: 60px;
  width: 550px;
  min-height: 300px;
  max-height: fit-content;
  background-color: aliceblue;
  border: 1px solid black;
  border-radius: 4px
`;

export const InputsContainer = styled.div`
  ${boxBasicStyles}
  gap: 20px;
  width: 100%;
`;

export const ResultsContainer = styled.div`
${boxBasicStyles}
gap: 20px;
padding: 30px 60px;
background-color: aliceblue;
width: 550px;
border: 1px solid black;
border-radius: 4px;
`

export const ResultValueContainer = styled.div`
height: 30px;
font-size: 20px;
background-color: white;
border: 1px solid black;
border-radius: 4px;
width: 100%;
padding: 0 12px;
`;
