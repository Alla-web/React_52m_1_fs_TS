import GlobalStyles from "./styles/GlobalStyles";

//lessons
// import Lesson06 from "./lessons/lesson06/Lesson06";
// import Lesson07 from "./lessons/Lesson07/Lesson07";
// import Lesson08 from "./lessons/Lesson08/Lesson08";

//selflearning
// import Selflearning07 from "./lessons/Lesson07/Selflearning07";


//homeworks
import Homework08 from "./homeworks/Homework08/Homework08";

//consultations
// import Consultation03 from "./consultations/consultatin03/Consultation03";

function App() {
  return (
    <>    
        <GlobalStyles/>
        {/* --------------Topic: TypeScript Introduction */}
        {/* <Lesson06 /> */}
        {/* <Consultation03 /> */}
        {/* --------------Topic: Object types, enum */}
        {/* <Lesson07 /> */}
        {/* <Selflearning07/> */}
        {/* --------------Topic: Styling components */}
        {/* <Lesson08/>      */}   
            <Homework08/> 
    </>
  );
}

export default App;  

