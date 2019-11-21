import React, { useState, useReducer, useEffect } from "react";
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
import Cart from "./components/Cart/index";
// import CartItems from "./components/CartItems/index";

// Reducers
import cartReducer from "./reducers/cartReducer";

// Test Products
import initialProducts from "./context/initialProducts";
import initialCart from "./context/initialCart";

export const ProductContext = React.createContext(initialProducts);
export const CartContext = React.createContext(initialCart);

function App() {
  const [cartState, setCartState] = useState(initialCart);
  const [cartProducts, dispatchCart] = useReducer(cartReducer, cartState);

  // useEffect(async () => {
  //   const result = await axios(
  //     "https://hn.algolia.com/api/v1/search?query=redux"
  //   );
  //   setData(result.data);
  // });

  const handleAddToCart = product => {
    setCartState(
      dispatchCart({
        type: "ADD_TO_CART",
        product: product
      })
    );
  };

  const handleRemoveFromCart = product => {
    dispatchCart({ type: "REMOVE_FROM_CART", product: product });
  };

  const handleClearCart = () => {
    dispatchCart({ type: "CLEAR_CART" });
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
            <Route exact path="/products/" component={Shop} />
            <Route exact path="/shop/" component={Shop} />
            <Route exact path="/cart/" component={Cart} />
            <Route exact path="/checkout/" component={Checkout} />
            <Route exact path="/contact/" component={Contact} />
            <Route
              path="/products/:id"
              render={product => <SingleProduct {...product} />}
            />
            <Route>{"404"}</Route>
          </Switch>
        </CartContext.Provider>
      </ProductContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
