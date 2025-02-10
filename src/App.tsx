import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import Layout from "components/Layout/Layout";
import Home from "pages/Home/Home";
import About from "pages/About/About";
import Users from "pages/Users/Users";
import User from "pages/Users/components/User/User";
import Clients from "pages/Clients/Clients";
import BmwCompany from "pages/Clients/components/BMW/BMW";
import FerrariCompany from "pages/Clients/components/Ferrari/Ferrari";
import VwCompany from "pages/Clients/components/VW/VW";

//lessons
// import Lesson06 from "./lessons/lesson06/Lesson06";
// import Lesson07 from "./lessons/Lesson07/Lesson07";
// import Lesson08 from "./lessons/Lesson08/Lesson08";
// import Lesson09 from "lessons/Lesson09/Lesson09";
// import Lesson10 from "./lessons/Lesson10/Lesson10";
// import Lesson11 from "./lessons/Lesson11/Lesson11";
// import Lesson12 from "lessons/Lesson12/Lesson12";
import Lesson14 from "lessons/Lesson14/Lesson14";
//Lesson15
// import EmployeeLayout from "components/EmployeeLayout/EmployeeLayout";
// import CreateEmployee from "lessons/Lesson15/CreateEmployee/CreateEmployee";
// import Employees from "lessons/Lesson15/Employees/Employees";

//selflearning
// import Selflearning07 from "./lessons/Lesson07/Selflearning07";

//homeworks
// import Homework08 from "./homeworks/Homework08/Homework08";
// import Homework09 from "./homeworks/Homework09/Homework09";
// import Homework10 from "./homeworks/Homework10/Homework10";
// import EmployeeForm from "components/EmployeeForm/EmployeeForm";
// import Homework12 from "homeworks/Homework12/Homewrk12";
import Homework14 from "homeworks/Homework14/Homework14";

//consultations
// import Consultation03 from "./consultations/consultatin03/Consultation03";
// import Consultation04 from "./consultations/Consultation04/Consultation04-05";
import Consultation06 from "consultations/Consultation06/Consultation06";

function App() {
  return (
    //глобальная настройка для работы с роутингом
    //BrowserRouter - компонет из react-router-dom, который позволяет работать с маршрутами
    <BrowserRouter>
      <GlobalStyles />
      {/* <EmployeeLayout>
        <Routes>

          <Route path="/createEmployee" element={<CreateEmployee />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="*" element='No pages found'/>

          {/* Route - компонент, который передается в маршрут и контент, который 
        нужно отрендерить (отрисовать) по этому маршруту*/}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/user" element={<User />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/BMW" element={<BmwCompany />} />
          <Route path="/clients/Ferrari" element={<FerrariCompany />} />
          <Route path="/clients/VW" element={<VwCompany />} />
          {/* --------------Topic: hoock useContext */}
          <Route path="/lesson14" element={<Lesson14 />} />
          <Route path="/consultation06" element={<Consultation06 />} />
          <Route path="/homework14" element={<Homework14 />}/>
          {/* Для избежания ошибок при рукоблудстве пользователя в троке веб-адреса
            Route* - этот routе показывает контент, если маршрута не существует  в перечисленных выше.*/}
          <Route path="*" element="Page not found" />

        </Routes>
      </EmployeeLayout> */}
      <Layout>
      {/* Routes - собирает все маршруты приложения  */}
      <Routes>
      {/* Route - компонент, который передается в маршрут и контент, который 
        нужно отрендерить (отрисовать) по этому маршруту*/}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/user" element={<User />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/clients/BMW" element={<BmwCompany />} />
      <Route path="/clients/Ferrari" element={<FerrariCompany />} />
      <Route path="/clients/VW" element={<VwCompany />} />
      {/* --------------Topic: hoock useContext */}
      <Route path="/lesson14" element={<Lesson14 />} />
      <Route path="/consultation06" element={<Consultation06 />} />
      {/* Для избежания ошибок при рукоблудстве пользователя в троке веб-адреса
            // Route* - этот routе показывает контент, если маршрута не существует  в перечисленных выше.*/}
      <Route path="*" element="Page not found" />
      </Routes>
      </Layout>
      {/* --------------Topic: TypeScript Introduction */}
      {/* <Lesson06 /> */}
      {/* <Consultation03 /> */}
      {/* --------------Topic: Object types, enum */}
      {/* <Lesson07 /> */}
      {/* <Selflearning07/> */}
      {/* --------------Topic: Styling components */}
      {/* <Lesson08/>      */}
      {/* <Homework08/>  */}
      {/* --------------Topic: Control components, useEffect (hoock) */}
      {/* <Lesson09/> */}
      {/* <Consultation04-05 /> */}
      {/* --------------Topic: useEffect */}
      {/* <Lesson10/> */}
      {/* <Homework10/> */}
      {/* <Consultation04 /> */}
      {/* <Homework09/> */}
      {/* --------------Topic: useEffect */}
      {/* <Lesson10/> */}
      {/* <Lesson11/> */}
      {/* --------------Topic: formic, yup */}
      {/* <Lesson12/> */}
      {/* <Homework12/> */}
    </BrowserRouter>
  );
}

export default App;
