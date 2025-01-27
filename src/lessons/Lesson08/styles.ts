//импортируем emotion обязательно из styled
import styled from "@emotion/styled";
import { css } from "@emotion/react";

//Создаём интерфейс для Props стилизованного элемента BoxInfo
interface BoxInfoStyledProps {
  primary?: boolean;
}

//Шаблоны стилей для переиспользования
const boxBasicStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const BoxInfo = styled.div<BoxInfoStyledProps>`
  //подстановка созданной переменной стилей (стр 11)
  ${boxBasicStyles}
  min-width: 300px;
  min-height: 300px;
  /* background-color: rebeccapurple; */
  //Добавление логики через Props для использования различных свойств
  background-color: ${(props) => (props.primary ? "rebeccapurple" : "purple")};
  /* border: 2px solid black; */
  //Добавление логики при помощи декомпозиции props
  border: ${({ primary }) =>
    primary ? "2px solid black" : "6px solid orange"};
  border-radius: 8px;
  color: yellow;
  font-size: 26px;
  font-weight: bold;

  //пример работы с псевдоклассами
  &:hover{
    background-color: #EC4DFA;
  }
`;

export const ContentContainer = styled.div`
  ${boxBasicStyles}
  flex-direction: column;
  gap: 20px;
  border-color: gray;
`;

export const Image = styled.img`
  width: 300px;
  border-radius: 8px;
`;

export const Text = styled.p`
  font-size: 24px;
  color: red;
`;
