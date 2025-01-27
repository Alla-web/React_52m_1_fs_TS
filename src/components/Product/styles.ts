import styled from "@emotion/styled";

export const ProductContainerStyled = styled.div`
  min-width: 300px;
  min-height: 100px;
  padding: 26px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background-color: rgb(144, 241, 254);
  color: rgb(31, 35, 35);
  font-size: 26px;
  border: 1px solid rgb(127, 191, 199);
  border-radius: 4px;
`;

export const ProductPropertyContainerStyled = styled.div`
  display: flex;
  gap: 10px;
`;

export const ProductPropertyTitleStyled = styled.p`
  min-width: 70px;
  font-weight: bold;
  color: rgb(67, 66, 66);
`;
