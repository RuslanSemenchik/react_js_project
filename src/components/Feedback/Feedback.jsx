import "./styles.css";
import Button from "../Button/Button";
// 1 шаг: импортировать функцию хук useState() из библиотеки React
import { useState } from "react";
function Feedback (){

 const [likeCounter, setlikeCounter] = useState(0);
 const [disLikeCounter, setDislikeCounter] = useState(0);
 
  const reset = () => {
     setlikeCounter(0);
     setDislikeCounter(0);
     };

  const counterLikes = () => {
      setlikeCounter((prevValue) => {
      return prevValue + 1;
    });
    
  };
  const counterDisLikes = () => {
      setDislikeCounter((prevValue) => {
      return prevValue + 1;
    });
    
  };

    return <div className="feedback-wrapper">
        <div className="button-control">
            <Button 
            onClick={counterDisLikes}
            buttonName={"Dislike"}
            />
        </div>
        <p className="count">{disLikeCounter}</p>
        <div className="button-control">
            <Button
            onClick={counterLikes}
            buttonName= "Like"
            />
        </div>
        <p className="count">{likeCounter}</p>
        <div className="button-reset">
            <Button
            onClick={reset}
            buttonName= "Reset Results"
            />
        </div>
    </div>

    
}
export default Feedback;