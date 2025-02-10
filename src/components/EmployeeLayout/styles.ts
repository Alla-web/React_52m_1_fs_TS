import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const EmployeeLayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: #faf9ff;
  color: #112233;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  border-bottom: 1px solid #112233; 
`;

export const Logo = styled.img`
  width: 100px;
  cursor: pointer;
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 25px;
  font-size: 28px;
`;
export const Main = styled.main`
padding-top: 120px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Footer = styled.footer`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #faf9ff;
  color: #112233;
`;

//стилизация ссылки при переходе по этой ссылке
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  color: #04305d;
`;
