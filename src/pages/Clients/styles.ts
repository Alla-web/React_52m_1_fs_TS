import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ClientsPage = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 30px;
  padding: 20px;
  font-size: 30px;
  `

export const Title = styled.div`
 font-size: 36px;
 font-weight: bold;
`

export const StyledLinks = styled(Link)`
text-decoration: none;
color: darkorange;
font-size: 26px;
font-weight: bold;
`
