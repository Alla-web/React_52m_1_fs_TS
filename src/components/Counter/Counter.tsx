import Button from "../Button/Button";
import "./styles.css";

import { useState } from "react";

function Counter() {
 
  const [counter, setCounter] = useState<number>(0);
  
  const onPlusClick = (): void => {    
    if (counter < 10) {
      setCounter((prevState) => prevState + 1);
    }
  };

  const onMinusClick = (): void => {
    if (counter > -10){
        setCounter((prevState) => prevState - 1);
    }    
  };

  return (
    <div className="counter-container">
      <div className="button-container">
        <Button name="-" type="button" onClick={onMinusClick} />
      </div>
      <div className="result-container">{counter}</div>
      <div className="button-container">
        <Button name="+" type="button" onClick={onPlusClick} />
      </div>
    </div>
  );
}

export default Counter;
