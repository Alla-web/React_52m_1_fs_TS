import {
  LayoutComponent,
  Header,
  NavContainer,
  LogoContainer,
  Main,
  Footer,
  StyledNavLink,
} from "./styles";
import { LayoutProps } from "./types";
import { Link, useNavigate } from "react-router-dom";

function Layout({ children }: LayoutProps) {
  // 2-й вариант работы с навигационным меню
  //вызываем хук useNavigate()
  const navigate = useNavigate();
  //а потом передаём эту функцию в атрибут оnClick c указанием адреса
  return (
    <LayoutComponent>
      <Header>
        {/* <Link to='/'><LogoContainer></LogoContainer></Link> */}
        {/* 2-й способ с использованием уже вызванного хука useNavigate() */}
        <LogoContainer
          onClick={() => {
            navigate("/");
          }}
        ></LogoContainer>
        <NavContainer>
          <StyledNavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            to="/about"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            About
          </StyledNavLink>
          <StyledNavLink
            to="/users"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Users
          </StyledNavLink>
          <StyledNavLink
            to="/clients"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Clients
          </StyledNavLink>
          <StyledNavLink
            to="/lesson14"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Lesson 14
          </StyledNavLink>
          <StyledNavLink
            to="/consultation06"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Consultation 6
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <LogoContainer></LogoContainer>
      </Footer>
    </LayoutComponent>
  );
}

export default Layout;
