import React, { Component } from "react";
import "./index.scss";
import Hero from "../Hero/index";
import Shop from "../Shop/index";
//import ATCButton from "./components/ATCButton/index";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Hero />
        <Shop />
      </>
    );
  }
}
