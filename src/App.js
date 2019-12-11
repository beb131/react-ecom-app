import React, { useState, useReducer, createContext } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "./scss/styles.scss";

// Components
import Hero from "./components/Hero/index";
import Checkout from "./components/Checkout/index";
import Contact from "./components/Contact/index";
import Shop from "./components/Shop/index";
import Footer from "./components/Footer/index";
import ProductPage from "./components/Products/Product/Page/index";
import Category from "./components/Categories/Category/index";
import CartPage from "./components/Cart/CartPage/index";

// Reducers
import cartReducer from "./reducers/cartReducer";

// Sample Data
import categories from "./data/Categories.json";
import products from "./data/Items.json";
import productCategories from "./data/ItemCategories.json";
import inventory from "./data/InvtIDs.json";
import extensions from "./data/ItemExtensions.json";

// Context
export const CategoryContext = createContext(categories);
export const ProductContext = createContext(products);
export const ProductCatContext = createContext(productCategories);
export const InventoryContext = createContext(inventory);
export const ExtensionContext = createContext(extensions);
console.log(extensions);
export const CartContext = createContext([]);

function App() {
  const [cartState, setCartState] = useState([]);
  const [cartProducts, dispatchCart] = useReducer(cartReducer, cartState);

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
      <CategoryContext.Provider value={categories}>
        <ProductCatContext.Provider value={productCategories}>
          <ProductContext.Provider value={products}>
            <InventoryContext.Provider value={inventory}>
              <ExtensionContext.Provider value={extensions}>
                <CartContext.Provider
                  value={{
                    // cartProducts,
                    handleAddToCart,
                    handleRemoveFromCart,
                    handleClearCart
                  }}
                >
                  <Hero />
                  <Switch>
                    <Route exact path="/" component={Shop} />
                    <Route exact path="/products/" component={Shop} />
                    <Route exact path="/shop/" component={Shop} />
                    <Route exact path="/cart/" component={CartPage} />
                    <Route exact path="/checkout/" component={Checkout} />
                    <Route exact path="/contact/" component={Contact} />
                    <Route path="/products/:id" component={ProductPage} />
                    <Route path="/category/:id" component={Category} />
                    <Route>{"404"}</Route>
                  </Switch>
                </CartContext.Provider>
              </ExtensionContext.Provider>
            </InventoryContext.Provider>
          </ProductContext.Provider>
        </ProductCatContext.Provider>
      </CategoryContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
