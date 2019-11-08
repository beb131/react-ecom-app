import React, { Component } from "react";
import "./index.scss";
import Products from "../Products/index";

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <section className="section">
          <h1>{this.constructor.name}</h1>
          <Products />
        </section>
      </>
    );
  }
}
