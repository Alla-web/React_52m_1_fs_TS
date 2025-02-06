import {
  EmployeeLayoutComponent,
  Footer,
  Header,
  Logo,
  Main,
  NavContainer,
  StyledNavLink,
} from "./styles";
import { EmployeeLayoutProps } from "./types";
import LogoFoto from "../../assets/Foto/logo.lesson15.jpg";
import { Link } from "react-router-dom";

// хранилище стейта
//создаём контекст

function EmployeeLayout({ children }: EmployeeLayoutProps) {
  return (
    <EmployeeLayoutComponent>
      <Header>
        <Link to='/' ><Logo src={LogoFoto} alt="Company logo" /></Link>
        <NavContainer>            
            <StyledNavLink to='/createEmployee'  style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            > Create Employee
            </StyledNavLink>
            <StyledNavLink to='/employees'  style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            > Employees
            </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <Logo src={LogoFoto} alt="Company logo" />
      </Footer>
    </EmployeeLayoutComponent>
  );
}

export default EmployeeLayout;
