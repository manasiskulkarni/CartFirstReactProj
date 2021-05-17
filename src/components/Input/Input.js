import React from "react";
import InputCss from "./Input.module.css";

const input = (props) => {
  const fruits = props.fruits.map((fruit) => {
    return <li key={fruit.fruitName}
    onClick={()=>props.showFruits(fruit)} 
   > {fruit.fruitName} </li>;
  });

  return (
    <div className={InputCss.Input}>
        <h3>List of Fruits</h3>
      <ul>{fruits}</ul>
    </div>
  );
};

export default input;
