import React from "react";
import Input from "../Input/Input";
import AddButton from '../Add/Add'
import LeftPageCss from './LeftPage.module.css'

const leftPage = (props) => {
  return (
    <div className={ LeftPageCss.LeftPage} >
      <Input fruits={props.fruits} showFruits={props.showFruits} />
      <AddButton />
    </div>
  );
};

export default leftPage;
