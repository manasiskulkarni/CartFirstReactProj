import React from "react";
import FruitsCss from "./Fruits.module.css";
import Output from "../Output/Output";

const fruits = (props) => {

    // const fruits = Object.keys(props.fruits)
    // .map( keys =>{
    //   return [...Array(props.fruits[keys])].map((_, i) =>{
    //      return <Output key={ keys + i } type={keys} />
    //   })
    // })
    // .reduce((arr, el) =>{
    //     return arr.concat(el)
    // }, [])

  return (
    <div className={FruitsCss.Fruits}>
        {/* {fruits  } */}
        <Output selectedFruit={props.selectedFruit} />
      {/* <Output type="Banana" />
      <Output type="Orange" />
      <Output type="Pineapple" />
      <Output type="Mango" />
      <Output type="Custuredapple" />
      <Output type="Watermelon" />
      <Output type="Strawberry" /> */}
    </div>
  );
};

export default fruits
