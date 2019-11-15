import React, { useState, useReducer } from "react";
import "./App.css";
import "./scss/styles.scss";

// Components
import Hero from "./components/Hero/index";
import Checkout from "./components/Checkout/index";
import Contact from "./components/Contact/index";
import Shop from "./components/Shop/index";
import Footer from "./components/Footer/index";
import { Route, Switch } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";
// import Home from "./components/Home/index";
// import Cart from "./components/Cart/index";
// import CartItems from "./components/CartItems/index";

// Reducers
import cartReducer from "./reducers/cartReducer";

// Test Products
import initialProducts from "./context/initialProducts";

export const ProductContext = React.createContext(initialProducts);
export const CartContext = React.createContext([0, () => {}]);

function App() {
  const [cartProducts, dispatchCart] = useReducer(cartReducer, initialProducts);
  const [cartState, setCartState] = useState([cartProducts]);

  const handleAddToCart = product => {
    dispatchCart({ type: "ADD_TO_CART", id: product.id });
    console.log("Dispatched ATC");
  };

  const handleRemoveFromCart = product => {
    dispatchCart({ type: "REMOVE_FROM_CART", id: product.id });
    console.log("Dispatched RFC");
  };

  const handleClearCart = product => {
    dispatchCart({ type: "CLEAR_CART" });
    console.log("Dispatched CC");
  };

  return (
    <div className="App">
      <Hero />
      <ProductContext.Provider value={initialProducts}>
        <CartContext.Provider
          value={{
            cartProducts,
            handleAddToCart,
            handleRemoveFromCart,
            handleClearCart
          }}
        >
          <Switch>
            <Route exact path="/" component={Shop} />
            <Route exact path="/contact/" component={Contact} />
            <Route exact path="/checkout/" component={Checkout} />
            <Route
              path="/products/:id"
              render={product => <SingleProduct {...product} />}
            />
            <Route path="/products/" component={Shop} />
            <Route path="/shop/" component={Shop} />
            <Route>{"404"}</Route>
          </Switch>
        </CartContext.Provider>
      </ProductContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
