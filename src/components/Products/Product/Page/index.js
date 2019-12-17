import React, { useContext } from "react";
import "./index.scss";
import Sidebar from "../Sidebar/index";
import ProductInfo from "../ProductInfo/index";
import ATCCard from "../ATC/ATCCard/index";
import { ProductContext } from ".././../../../App";
export default function ProductPage(props) {
  const products = useContext(ProductContext);

  const productObj = products.filter(
    product => product.ProductURL === props.match.params.id
  );

  const [product] = productObj;

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
          />
        </div>
        <div id="product_ymal"></div>
      </section>
    </>
  );
}
