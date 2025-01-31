import GlobalStyles from "./styles/GlobalStyles";

//lessons
// import Lesson06 from "./lessons/lesson06/Lesson06";
// import Lesson07 from "./lessons/Lesson07/Lesson07";
// import Lesson08 from "./lessons/Lesson08/Lesson08";
// import Lesson09 from "./lessons/Lesson09/Lesson09";
// import Lesson10 from "./lessons/Lesson10/Lesson10";
import Lesson11 from "./lessons/Lesson11/Lesson11";
import Lesson12 from "lessons/Lesson12/Lesson12";


//selflearning
// import Selflearning07 from "./lessons/Lesson07/Selflearning07";

//homeworks
// import Homework08 from "./homeworks/Homework08/Homework08";
// import Homework09 from "./homeworks/Homework09/Homework09";

//consultations
// import Consultation03 from "./consultations/consultatin03/Consultation03";
// import Consultation04 from "./consultations/Consultation04/Consultation04";

function App() {
  return (
    <>
      <GlobalStyles />
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
      {/* <Consultation04 /> */}
      {/* <Homework09/> */}
      {/* --------------Topic: useEffect */}
      <Lesson11/>
      {/* <Lesson10/> */}
      {/* --------------Topic: formic, yup */}
      <Lesson12/>
    </>
  );
}

export default App;
