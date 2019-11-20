import React, { useContext } from "react";
import "./index.scss";
import CartItems from "../CartItems/index";
import { CartContext } from "../../App";

export default function Cart() {
  const cart = useContext(CartContext);
  const cartProducts = cart.cartProducts;
  let cartList = [];
  if (cartProducts) {
    cartList = cartProducts.map(item => (
      <CartItems
        key={item.id}
        name={item.name}
        img={item.img}
        price={item.price}
        excerpt={item.excerpt}
        handleRemoveFromCart={cart.handleRemoveFromCart}
      />
    ));
  }
  return (
    <>
      <section className="section" id="products">
        {cartList.length ? cartList : "Your cart is empty"}
        <button className="button is-danger" onClick={cart.handleClearCart}>
          Empty Cart
        </button>
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
