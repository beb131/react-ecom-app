import React, { useContext, useState, useEffect } from "react";
import "./index.scss";
import CartItem from "../CartItem/index";
import { CartContext } from "../../../App";
import { Link } from "react-router-dom";

export default function CartPage() {
  const cart = useContext(CartContext);

  const [subtotal, setSubtotal] = useState(0);
  let cartList = [];

  if (cart.cartProducts) {
    cartList = cart.cartProducts.map(item => (
      <CartItem
        key={item.InvtID}
        item={item}
        handleRemoveFromCart={cart.handleRemoveFromCart}
        handleQuanUpdate={cart.handleQuanUpdate}
      />
    ));
  }

  useEffect(() => {
    setSubtotal(
      cart.cartProducts.reduce((acc, curr) => {
        return acc + curr.totalPrice;
      }, 0)
    );
  }, [cart.cartProducts]);

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
        {subtotal > 0 && (
          <div id="subtotal_container">
            <p>Subtotal: {`$${subtotal.toFixed(2)}`}</p>
          </div>
        )}

        <div id="checkout_container">
          <button className="button is-link">Checkout</button>
        </div>
      </section>
    </>
  );
}
