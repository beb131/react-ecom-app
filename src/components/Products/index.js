import React, { useContext } from "react";
import "./index.scss";
import ProductCard from "../ProductCard/index";
// import SingleProduct from "../SingleProduct/index";
import { ProductContext, CartContext } from "../../App";

export default function Products(props) {
  const products = useContext(ProductContext);
  const cart = useContext(CartContext);

  const productList = products.map(item => (
    <ProductCard
      key={item.id}
      item={item}
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
