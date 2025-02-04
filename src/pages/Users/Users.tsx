import { Link, useNavigate } from "react-router-dom";
import Button from "components/Button/Button";
import { Title, UsersPage } from "./styles";

function Users() {
  //useNavigate - возвращает функцию, при вызове которой мы можем перенаправить пользователя
  // на другой url

  const navigate = useNavigate();
  //после вызова useNavigate() запускается функция перенаправления, после этого
  //и указываем путь 
  const goToAboutPage = () => {
    navigate("/about");
  };

  return (
    <UsersPage>
      <Title>Select user</Title>
      {/* т.к. мы на странице, с которой будем переходить на user, 
      то в to можно писать только целевую страницу*/}
      <Link to="user">Go to User page</Link>
      {/* чтобы не оборачивать кнопку в линку с определённым маршрутом используем useNavigate*/}
      <Button name="Go to About Page" onClick={goToAboutPage} />
    </UsersPage>
  );
}

export default Users;
