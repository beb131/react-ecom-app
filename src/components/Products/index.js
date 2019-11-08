import React, { Component } from "react";
import "./index.scss";
import ProductCard from "../ProductCard/index";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "Product Test",
          img: "https://bulma.io/images/placeholders/1280x960.png",
          price: "20",
          desc: "Lorem ipsum dolor sit amet..."
        },
        {
          id: 2,
          name: "Product Test",
          img: "https://bulma.io/images/placeholders/1280x960.png",
          price: "20",
          desc: "Lorem ipsum dolor sit amet..."
        },
        {
          id: 3,
          name: "Product Test",
          img: "https://bulma.io/images/placeholders/1280x960.png",
          price: "20",
          desc: "Lorem ipsum dolor sit amet..."
        },
        {
          id: 4,
          name: "Product Test",
          img: "https://bulma.io/images/placeholders/1280x960.png",
          price: "20",
          desc: "Lorem ipsum dolor sit amet..."
        },
        {
          id: 5,
          name: "Product Test",
          img: "https://bulma.io/images/placeholders/1280x960.png",
          price: "20",
          desc: "Lorem ipsum dolor sit amet..."
        },
        {
          id: 6,
          name: "Product Test",
          img: "https://bulma.io/images/placeholders/1280x960.png",
          price: "20",
          desc: "Lorem ipsum dolor sit amet..."
        }
      ]
    };
  }
  render() {
    const productList = this.state.products.map(product => (
      <ProductCard
        key={product.id}
        name={product.name}
        img={product.img}
        price={product.price}
        desc={product.desc}
      />
    ));
    return (
      <>
        <section className="section">{productList}</section>
      </>
    );
  }
}
