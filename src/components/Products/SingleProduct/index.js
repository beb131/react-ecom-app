import React, { useContext } from "react";
import ProductContext from "../../../App";
import "./index.scss";

export default function SingleProduct(props) {
  const products = useContext(ProductContext);
  console.log(products);
  // const product = products.filter(item => {
  //   return item.ProductURL === props.match.params;
  // });

  // console.log("Product", product);
  return (
    <>
      <div className="card" key={props.id}>
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.img} alt="Placeholder" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{props.name}</p>
            </div>
          </div>
          <div className="content">
            <div className="excerpt">{props.excerpt}</div>
            <div className="price">{props.price}</div>
          </div>
        </div>
      </div>
    </>
  );
}
