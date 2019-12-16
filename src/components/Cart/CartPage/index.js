import React, { useContext } from "react";
import "./index.scss";
import CartItems from "../CartItems/index";
import { CartContext, ProductContext, InventoryContext } from "../../../App";
import { Link } from "react-router-dom";

export default function CartPage() {
  const products = useContext(ProductContext);
  const cart = useContext(CartContext);
  const inventory = useContext(InventoryContext);
  // Filter InvtIDs with cartProducts
  // Filter products with invtproducts
  // Pass both filtered products and filtered InvtIds to CartItems

  // This filter isn't working
  console.log(cart.cartProducts);
  const cartInvts = inventory.filter(item => {
    cart.cartProducts.forEach(cartProduct => {
      return item.InvtID === cartProduct.InvtID;
    });
  });

  console.log("CartProducts", cart.cartProducts);
  console.log("Cart Invts", cartInvts);

  const cartProducts = [];
  // const cartProducts = cart.cartProducts;
  // console.log("Products In cart", cartProducts);
  // Prevent cartList from being undefined
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
