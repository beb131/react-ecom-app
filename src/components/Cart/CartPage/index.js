import React, { useContext } from "react";
import "./index.scss";
import CartItems from "../CartItems/index";
import { CartContext } from "../../../App";
import { Link } from "react-router-dom";

export default function CartPage() {
  const cart = useContext(CartContext);
  const cartProducts = cart.cartProducts;
  let cartList = [];
  if (cartProducts) {
    cartList = cartProducts.map(item => (
      <CartItems
        key={item.id}
        item={item}
        handleRemoveFromCart={cart.handleRemoveFromCart}
      />
    ));
  }
  return (
    <>
      <section className="section" id="cart">
        <h1 className="title is-1">Cart</h1>
        {cartList.length ? (
          <div className="empty-cart-container">
            <button
              className="button is-danger btn-empty-cart"
              onClick={cart.handleClearCart}
            >
              Empty Cart
            </button>
          </div>
        ) : (
          <h2 className="title is-2">
            Your cart is empty, shop <Link to="/shop">here</Link>
          </h2>
        )}
        {cartList}
      </section>
    </>
  );
}

// Cart
//// Items
//// Quantity Adjustment
//// Delete Item
//// Price Calc
//// Checkout Button
