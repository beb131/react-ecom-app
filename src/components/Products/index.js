import React, { useContext } from "react";
import "./index.scss";
import ProductCard from "../ProductCard/index";
// import SingleProduct from "../SingleProduct/index";
import { ProductContext, CartContext } from "../../App";

export default function Products(props) {
  const products = useContext(ProductContext);
  const cart = useContext(CartContext);

  const productList = products.map(product => (
    <ProductCard
      key={product.id}
      name={product.name}
      img={product.img}
      price={product.price}
      excerpt={product.excerpt}
      handleAddToCart={cart.handleAddToCart}
    />
  ));
  return (
    <>
      <section className="section" id="products">
        {productList}
      </section>
    </>
  );
}
