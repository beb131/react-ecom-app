import React from "react";
import "./App.css";
import "./scss/styles.scss";
import Hero from "./components/Hero/index";
// import Home from "./components/Home/index";
// import Cart from "./components/Cart/index";
// import CartItems from "./components/CartItems/index";
import Checkout from "./components/Checkout/index";
import Contact from "./components/Contact/index";
import Shop from "./components/Shop/index";
import Footer from "./components/Footer/index";
import { Link, Route, Switch } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";

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

const products = [
  {
    id: 1,
    name: "Product Test",
    img: "https://bulma.io/images/placeholders/1280x960.png",
    price: "20",
    excerpt: "Lorem ipsum dolor sit amet...",
    description: "Lorem ipsum dolor sit amet"
  },
  {
    id: 2,
    name: "Product Test",
    img: "https://bulma.io/images/placeholders/1280x960.png",
    price: "20",
    excerpt: "Lorem ipsum dolor sit amet...",
    description: "Lorem ipsum dolor sit amet"
  },
  {
    id: 3,
    name: "Product Test",
    img: "https://bulma.io/images/placeholders/1280x960.png",
    price: "20",
    excerpt: "Lorem ipsum dolor sit amet...",
    description: "Lorem ipsum dolor sit amet"
  },
  {
    id: 4,
    name: "Product Test",
    img: "https://bulma.io/images/placeholders/1280x960.png",
    price: "20",
    excerpt: "Lorem ipsum dolor sit amet...",
    description: "Lorem ipsum dolor sit amet"
  },
  {
    id: 5,
    name: "Product Test",
    img: "https://bulma.io/images/placeholders/1280x960.png",
    price: "20",
    excerpt: "Lorem ipsum dolor sit amet...",
    description: "Lorem ipsum dolor sit amet"
  },
  {
    id: 6,
    name: "Product Test",
    img: "https://bulma.io/images/placeholders/1280x960.png",
    price: "20",
    excerpt: "Lorem ipsum dolor sit amet...",
    description: "Lorem ipsum dolor sit amet"
  }
];

export const ProductContext = React.createContext(products);

function App() {
  return (
    <div className="App">
      <Hero />
      <ProductContext.Provider value={products}>
        <Switch>
          <Route exact path="/" component={Shop} />
          <Route exact path="/contact/" component={Contact} />
          <Route exact path="/checkout/" component={Checkout} />
          <Route
            path="/products/:id"
            render={product => <SingleProduct {...product} />}
          />
          <Route path="/products/" component={Shop} />
          <Route>{"404"}</Route>
        </Switch>
      </ProductContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
