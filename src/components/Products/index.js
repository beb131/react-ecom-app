import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import ProductCard from "../ProductCard/index";
// import SingleProduct from "../SingleProduct/index";
import { ProductContext } from "../../App";

export default function Products(props) {
  const products = useContext(ProductContext);

  const handleATC = () => {
    console.log("Added to cart");
    console.log(props.id);
  };

  const productList = products.map(product => (
    // <Link to={`/products/${product.id}`}>
    <ProductCard
      key={product.id}
      name={product.name}
      img={product.img}
      price={product.price}
      excerpt={product.excerpt}
      handleATC={handleATC}
    />
    // </Link>
  ));
  return (
    <>
      <section className="section">{productList}</section>
    </>
  );
}
