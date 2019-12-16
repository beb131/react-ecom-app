import React, { useContext } from "react";
import "./index.scss";
import CartItems from "../CartItems/index";
import { CartContext, ProductContext, InventoryContext } from "../../../App";
import { Link } from "react-router-dom";

export default function CartPage() {
  const products = useContext(ProductContext);
  const cart = useContext(CartContext);
  const inventory = useContext(InventoryContext);
  // Filter products with invtproducts
  // Pass both filtered products and filtered InvtIds to CartItems

  const cartInvts = inventory.filter(item => {
    return cart.cartProducts.includes(item.InvtID);
  });

  const cartProducts = products.filter(product => {
    return cartInvts.some(item => {
      if (item.ItemID === product.ItemID) {
        // Combine cartInvts with products in cartProducts
        Object.assign(product, item);
      }
      return item.ItemID === product.ItemID;
    });
  });

  // Prevent cartList from being undefined
  let cartList = [];

  if (cartProducts) {
    cartList = cartProducts.map(item => (
      <CartItems
        key={item.ItemID}
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
