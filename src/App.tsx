import "./App.css";

//lessons
// import Lesson06 from "./lessons/lesson06/Lesson06";
// import Lesson07 from "./lessons/Lesson07/Lesson07";
import Lesson08 from "./lessons/Lesson08/Lesson08";

//selflearning
// import Selflearning07 from "./lessons/Lesson07/Selflearning07";

//homeworks

//consultations

function App() {
  return (
    <>
      <div className="app">
        {/* --------------Topic: TypeScript Introduction */}
        {/* <Lesson06 /> */}
        {/* --------------Topic: Object types, enum */}
        {/* <Lesson07 /> */}
        {/* <Selflearning07/> */}
        {/* --------------Topic: Styling components */}
        <Lesson08/>
      </div>
    </>
  );
}

export default App;
