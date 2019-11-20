import React, { Component } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import Products from "../Products/index";

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <section className="section" id="shop">
          <h1>{this.constructor.name}</h1>
          <Products />
          <Link to="/cart">
            <button className="button is-success">Cart</button>
          </Link>
        </section>
      </>
    );
  }
}
