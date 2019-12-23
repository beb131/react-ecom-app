const cartReducer = (cartProducts, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...cartProducts, action.product];
    case "REMOVE_FROM_CART":
      return cartProducts.filter(item => {
        return item.InvtID !== action.InvtID;
      });
    case "CLEAR_CART":
      return [];
    case "QUAN_UPDATE":
      const newCart = cartProducts.map(product => {
        if (product.InvtID !== action.product.InvtID) {
          return product;
        }
        product.quan = action.newQuan;
        product.totalPrice = product.price * action.newQuan;
        return product;
      });

      return [...newCart];
    default:
      throw new Error("Cart reducer error");
  }
};

export default cartReducer;
