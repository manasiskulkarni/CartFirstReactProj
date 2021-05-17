import React from "react";
import Output from "../Output/Output";

const controls = [
  "Banana",
  "Orange",
  "Pineapple",
  "Mango",
  "Custuredapple",
  "Watermelon",
  "Strawberry",
];
const control = (props) => (
  <div>
    {controls.map((ctrl) => (
      <Output key={ctrl} />
    ))}
  </div>
);

export default control;
