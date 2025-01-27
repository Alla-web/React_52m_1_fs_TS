import styled from "@emotion/styled";

export const InputContainerStyled = styled.div`
  width: 470px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InputElementStyled = styled.input`
  width: 470px;
  height: 50px;
  border-radius: 4px;
  padding: 12px;
  border: 1px solid rgb(57, 58, 58);
  outline: none;
  font-size: 16px;
  &::placeholder {
    color: gray;
  }
`;
