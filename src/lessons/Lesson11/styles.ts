import styled from "@emotion/styled";
import { css } from "@emotion/react";

const boxStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Lesson11Container = styled.div`
  ${boxStyles}
  gap: 30px;
  flex: 1;
  padding: 40px;
`;

export const InputButtonContainer = styled.div`
  ${boxStyles}
  gap: 20px;
  width: 600px;
  padding: 30px;
  background-color: #cfe8fd;
  border: 1px solid #a2d2ff;
  border-radius: 4px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const ResuiltsContainer = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 600px;
  min-height: 60px;
  max-height: 700px;
  padding: 20px 30px;
  background-color: #fdecf2;
  border: 1px solid #fcb4cf;
  border-radius: 4px;
  font-size: 16px;  
  overflow: auto;
`;

export const ResultsItem = styled.li`
  /* list-style-type: decimal; */
  list-style-position: inside;
  /* padding-inline-start: 10px; */ //добавляет паддинг к паддингу родителя(
  /* margin-left: 20px; // Расстояние между маркером и текстом - не работает( */
  &::marker {
    font-weight: bold;
    content: counter(list-item) '. ';    
  }
`;

export const ErrorBlock = styled.div`
  width: 600px;
  padding: 20px;
  background-color: #eb9378;
  border: 2px solid #e61212;
  border-radius: 6px;
  color: #e61212;
  font-size: 28px;
  font-weight: bold;
`;
