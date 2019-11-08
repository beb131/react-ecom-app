import React from "react";
import "./App.css";
import "./scss/styles.scss";
import Home from "./components/Home/index";
import Cart from "./components/Cart/index";
// import CartItems from "./components/CartItems/index";
import Checkout from "./components/Checkout/index";
import Contact from "./components/Contact/index";
import Footer from "./components/Footer/index";

// Hero
// Home
//// Shop
////// Product Card
//////// Product Info
//////// Add to Cart
// Cart
//// Items
//// Quantity Adjustment
//// Delete Item
//// Price Calc
//// Checkout Button
// Checkout
// Contact
//// Form
//// Map
// Footer

function App() {
  return (
    <div className="App">
      <Home />
      <Cart />
      <Checkout />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
