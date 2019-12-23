import React, { useContext } from "react";
import "./index.scss";
import { CartContext } from "../../../../../App";
import PropTypes from "prop-types";

export default function ATCButton(props) {
  const cart = useContext(CartContext);
  const handleClick = e => {
    e.target.innerHTML = "Added To Cart";
    cart.handleAddToCart(props.product);
  };

  return (
    <>
      <div id="atc_button">
        <button
          className="button is-link"
          onClick={handleClick}
          disabled={props.product.price < 1}
        >
          Add To Cart
        </button>
      </div>
    </>
  );
}

ATCButton.propTypes = {
  product: PropTypes.exact({
    ItemName: PropTypes.string.isRequired,
    InvtID: PropTypes.string.isRequired,
    quan: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired
  })
};
