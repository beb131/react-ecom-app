import React, { Component } from "react";
import "./index.scss";
import ProductCard from "../ProductCard/index";

export default class CartItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: this.props.cartItems
    };
  }
  render() {
    const cartList = this.state.cartItems.map(product => (
      <ProductCard
        key={product.id}
        name={product.name}
        img={product.img}
        price={product.price}
        excerpt={product.excerpt}
      />
    ));
    return (
      <>
        <section className="section">
          <h1>{this.constructor.name}</h1>
          {cartList}
        </section>
      </>
    );
  }
}
