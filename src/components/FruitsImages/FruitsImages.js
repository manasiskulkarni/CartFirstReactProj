import React from "react";
import Banana from "../../Assets/Images/banana.jpg";
import CusApple from "../../Assets/Images/cusApple.jpg";
import Mango from "../../Assets/Images/mango.jpg";
import Pineapple from "../../Assets/Images/pinapple.jpg";
import Strawberry from "../../Assets/Images/strawberry.jpg";
import Watermelon from "../../Assets/Images/watermelon.jpg";


const images = (props) => {
  return <div>
      <img src={Banana} alt="Banana"/>
      <img src={CusApple} alt="CusApple"/>
      <img src={Mango} alt="Mango"/>
      <img src={Pineapple} alt="Pineapple"/>
      <img src={Strawberry} alt="Strawberry"/>
      <img src={Watermelon} alt="Watermelon"/>
  </div>;
};

export default images;
