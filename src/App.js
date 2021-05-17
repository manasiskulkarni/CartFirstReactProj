import React, { Component } from "react";
import Layout from "./container/Layout/Layout";
import Aux from "./HOC/Auxe";


class App extends Component {
  render() {
    return (
      <Aux>
        <Layout />
      </Aux>
    );
  }
}

export default App;
