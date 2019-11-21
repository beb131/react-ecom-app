const cartReducer = (cartProducts, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...cartProducts, action.product];
    case "REMOVE_FROM_CART":
      console.log(action.product.id);
      return cartProducts.filter(item => item.id !== action.product.id);
    case "CLEAR_CART":
      return [];
    default:
      throw new Error("Cart reducer error");
  }
};

export default cartReducer;
