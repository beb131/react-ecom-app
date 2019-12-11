import React from "react";
import "./index.scss";

export default function ProductInfo(props) {
  const {
    ItemName,
    Description,
    ItemDetails,
    Image,
    Type,
    Keywords,
    MetaDescription,
    ProductURL,
    ItemID,
    extensions
  } = props.product;
  return (
    <>
      <img src={Image} />
      <div>{Description}</div>
      <div>{ItemDetails}</div>
    </>
  );
}
