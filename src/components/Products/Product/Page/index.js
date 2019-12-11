import React from "react";
import "./index.scss";
import Sidebar from "../Sidebar/index";
import ProductInfo from "../ProductInfo/index";
import ATCCard from "../ATC/ATCCard/index";

export default function ProductPage(props) {
  const { product } = props.location.state;

  return (
    <>
      <section className="section" id="single_product">
        <div id="product_sidebar">
          <Sidebar />
        </div>
        <div id="product_info">
          <ProductInfo product={product} />
        </div>
        <div id="product_atc">
          <ATCCard
            ItemName={product.ItemName}
            type={product.type}
            ItemID={product.ItemID}
            extensions={product.extensions}
          />
        </div>
        <div id="product_ymal"></div>
      </section>
    </>
  );
}
