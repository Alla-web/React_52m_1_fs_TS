import './styles.css';
import { useState } from "react";
import {v4 } from 'uuid';

function Consultation03() {
    const [ingredients, setIngredients] = useState<string[]>([]);
    console.log(ingredients);
    

    const addIngridient = (ingridientName: string)=>{
        setIngredients((prevState: string[]) => {
            return [...prevState, ingridientName]
        });
    }

    const buttonNames: string[] = ['Cheese', 'Meat', 'Salad', 'Bacon', 'Broad', 'Katchup' ];
  const buttons = buttonNames.map((ingridient)=> {
    return <button key={v4()} onClick={()=> addIngridient(ingridient)} className='button'>{ingridient}</button>
  });

  const ingridientsArr = ingredients.map((ingridient)=>{
    return <li key={v4()}>{ingridient}</li>
  });


    return (
      <div className="consultation02-container">
        <ol className="ingredients">{ingridientsArr}</ol>
        <div className="button-container">
          {/* <button onClick={()=>{}} className='button'>Cheese</button>
          <button onClick={()=>{}} className='button'>Meat</button>
          <button onClick={()=>{}} className='button'>Salad</button>
          <button onClick={()=>{}} className='button'>Bacon</button>
          <button onClick={()=>{}} className='button'>Broad</button>
          <button onClick={()=>{}} className='button'>Katchup</button> */}
          {buttons}
        </div>
      </div>
    );
  }
  
  export default Consultation03;
  