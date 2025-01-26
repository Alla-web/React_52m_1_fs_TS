import "./styles.css";
import Button from "../Button/Button";

import { useState } from "react";

function Feedback() {
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);
  console.log("rerendering");
  

  const onLikeClick = (): void => {
    setLikes((prevState) => prevState + 1);
  };

  const onDislikeClick = (): void => {
    setDislikes((prevState) => prevState + 1);
  };

  const onResetClick = (): void => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="feedback-container">
      <div className="counter-container">
        <div className="container">
          <div className="result-container">{likes}</div>
          <div className="hw4-button-container">
            <Button name="Like" type='button' onClick={onLikeClick} />
          </div>
        </div>
        <div className="container">
          <div className="result-container">{dislikes}</div>
          <div className="hw4-button-container">
            <Button name="Dislike" type='button' onClick={onDislikeClick} />
          </div>
        </div>
      </div>
      <div className="hw4-button-container resetButton-container">
        <Button name="RESET RESULTS" type='button' onClick={onResetClick} />
      </div>
    </div>
  );
}

export default Feedback;
