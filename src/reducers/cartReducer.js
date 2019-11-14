const cartReducer = (cartProducts, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...cartProducts, action.id];
    case "REMOVE_FROM_CART":
      return cartProducts.filter(item => item.id !== action.id);
    case "CLEAR_CART":
      return [{}];
    default:
      throw new Error("Cart reducer error");
  }
};

export default cartReducer;
