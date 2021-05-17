import React, { Component } from "react";
import Aux from "../../HOC/Auxe";
import LayoutCss from "./Layout.module.css";
import { Col, Row } from "react-bootstrap";
import LeftPage from "../../components/LeftPage/LeftPage";
import RightPage from "../../components/RightPage/RightPage";

class Layout extends Component {
  state = {
    fruits: [
      { fruitName: "Banana", imgurl: "https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg" },
      { fruitName: "Orange", imgurl: "https://c.ndtvimg.com/2019-06/8lrdfi6_orange650_650x400_07_June_19.jpg" },
      { fruitName: "Pineapple", imgurl: "https://cdn.mos.cms.futurecdn.net/JEKZM22ZasnFC7JFGkAMvU-1200-80.jpg" },
      { fruitName: "Mango", imgurl: "https://static.toiimg.com/thumb/msid-76646586,width-800,height-600,resizemode-75,imgsize-852090/76646586.jpg" },
      { fruitName: "Custuredapple", imgurl: "http://cdn.shopify.com/s/files/1/2083/6855/products/custardapplegreen.jpg?v=1603433389" },
      { fruitName: "Watermelon", imgurl: "https://blog-images.pharmeasy.in/2021/01/06210424/11.jpg" },
      { fruitName: "Strawberry", imgurl: "https://cdn.britannica.com/22/75922-050-D3982BD0/flowers-fruits-garden-strawberry-plant-species.jpg" },
    ],
    selected: null,
  };

  //   addFruit = (type) => {
  //     const updatedFruit = {
  //       ...this.state.fruits[type],
  //     };
  //     this.setState({ fruits: updatedFruit });
  //   };

  //   changeColor = () => {
  //     let selected = this.state.selected;
  //     this.setState({ selected: !selected });
  //   };

  showFruits = (fruitSelected) => {
    this.setState({ selected: fruitSelected });
  };

  render() {
    // const fruitsName = [...this.state.fruits].map((names) => {
    //   return (
    //     <ul key={names}>
    //       <li>{names}</li>
    //     </ul>
    //   );
    // });

    return (
      <Aux>
        <Row className={LayoutCss.Row}>
          <Col className={LayoutCss.Column1}>
            <LeftPage fruits={this.state.fruits} showFruits={this.showFruits} />
          </Col>
          <Col className={LayoutCss.Column2}>
            <RightPage selectedFruit={this.state.selected} />
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default Layout;
