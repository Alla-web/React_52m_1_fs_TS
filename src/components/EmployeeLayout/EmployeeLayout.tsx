import {
  EmployeeLayoutComponent,
  Footer,
  Header,
  Logo,
  Main,
  NavContainer,
  StyledNavLink,
} from "./styles";
import { EmployeeDataContextType, EmployeeLayoutProps } from "./types";
import LogoFoto from "../../assets/Foto/logo.lesson15.jpg";
import { Link } from "react-router-dom";
import { createContext } from "react";

//создаём и экспортируем контекст
export const EmployeeDataContext = createContext<EmployeeDataContextType>({
  employee: undefined,
  addEmployee: () => {},
});

function EmployeeLayout({ children }: EmployeeLayoutProps) {
  return (
    <EmployeeDataContext.Provider
      value={{
        employee: employeeData,
        addEmployee: setEmployeeData,
      }}
    >
      <EmployeeLayoutComponent>
        <Header>
          <Link to="/">
            <Logo src={LogoFoto} alt="Company logo" />
          </Link>
          <NavContainer>
            <StyledNavLink
              to="/createEmployee"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              {" "}
              Create Employee
            </StyledNavLink>
            <StyledNavLink
              to="/employees"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              {" "}
              Employees
            </StyledNavLink>
          </NavContainer>
        </Header>
        <Main>{children}</Main>
        <Footer>
          <Logo src={LogoFoto} alt="Company logo" />
        </Footer>
      </EmployeeLayoutComponent>
    </EmployeeDataContext.Provider>
  );
}

export default EmployeeLayout;
