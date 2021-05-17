import React, { Component } from "react";
import PropTypes from "prop-types";
import OutputCss from "./Output.module.css";
//import Images from "../FruitsImages/FruitsImages"


class Output extends Component {
  render() {
    // let fruitsDesc = null;

    // switch (this.props.selectedFruit) {
    //   case "Banana":
    //     fruitsDesc = (
    //       <div  >
    //         <img className={OutputCss.Banana} src={Banana} alt="Banana" />

    //       </div>
    //     );
    //     break;
    //   case "Orange":
    //     fruitsDesc = (
    //       <div>
    //         <img className={OutputCss.Orange} src={Orange} alt="Banana" />
    //       </div>
    //     );
    //     break;
    //   case "Pineapple":
    //     fruitsDesc = (
    //       <div>
    //         <img className={OutputCss.Pineapple} src={Pineapple} alt="Pineapple" />
    //       </div>
    //     );
    //     break;
    //   case "Mango":
    //     fruitsDesc = (
    //       <div>
    //         <img className={OutputCss.Mango} src={Mango} alt="Mango" />
    //       </div>
    //     );
    //     break;
    //   case "Custuredapple":
    //     fruitsDesc = (
    //       <div>
    //         <img className={OutputCss.Pineapple} src={CusApple} alt="CusApple" />
    //       </div>
    //     );
    //     break;
    //   case "Watermelon":
    //     fruitsDesc = (
    //       <div>
    //         <img className={OutputCss.Watermelon} src={Watermelon} alt="Watermelon" />
    //       </div>
    //     );
    //     break;
    //   case "Strawberry":
    //     fruitsDesc = (
    //       <div>
    //         <img className={OutputCss.Strawberry} src={Strawberry} alt="Strawberry" />
    //       </div>
    //     );
    //     break;
    //   default:
    //     fruitsDesc = null;
    // }

    // return fruitsDesc;
    return (this.props.selectedFruit?
      <div>
        <img
          width={60}
          className={OutputCss.Banana}
          src={this.props.selectedFruit.imgurl}
          alt={this.props.selectedFruit.fruitName}
        />
      </div>:null
    );
  }
}

export default Output;
