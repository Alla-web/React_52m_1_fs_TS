import { Link } from "react-router-dom"
import Button from "components/Button/Button"
import { Title, UsersPage } from "./styles"

function Users() {

  return (
    <UsersPage>
      <Title>Select user</Title>
      т.к. мы на странице, с которой будем переходить на user, то в to
      <Link to='user'>Go to User page</Link>
      <Button name="Go to About Page" onClick={()=>{}} />
    </UsersPage>
  )
}

export default Users