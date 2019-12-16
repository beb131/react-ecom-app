import React, { useContext } from "react";
import "./index.scss";
import { CartContext } from "../../../../../App";

export default function ATCButton(props) {
  const { InvtID } = props;
  const cart = useContext(CartContext);

  const handleClick = (product, e) => {
    e.target.innerHTML = "Added To Cart";
    cart.handleAddToCart(product);
  };

  return (
    <>
      <button
        className="button is-link"
        onClick={handleClick.bind(this, InvtID)}
      >
        Add To Cart
      </button>
    </>
  );
}
