import GlobalStyles from "./styles/GlobalStyles";

//lessons
// import Lesson06 from "./lessons/lesson06/Lesson06";
// import Lesson07 from "./lessons/Lesson07/Lesson07";
// import Lesson08 from "./lessons/Lesson08/Lesson08";
// import Lesson09 from "./lessons/Lesson09/Lesson09";
// import Lesson10 from "./lessons/Lesson10/Lesson10";

//selflearning
// import Selflearning07 from "./lessons/Lesson07/Selflearning07";

//homeworks
// import Homework08 from "./homeworks/Homework08/Homework08";
import Homework10 from "./homeworks/Homework10/Homework10";

//consultations
// import Consultation03 from "./consultations/consultatin03/Consultation03";
// import Consultation04 from "./consultations/Consultation04/Consultation04-05";

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
      {/* <Consultation04-05 /> */}
      {/* --------------Topic: useEffect */}
      {/* <Lesson10/> */}
      <Homework10/>
    </>
  );
}

export default App;
