const cartReducer = (cartProducts, action) => {
  switch (action.type) {
    // case "GET_INVTID":
    //   console.log(action);
    //   console.log(action.ItemID);
    //   console.log(action.extensions);
    //   return action.type === "P"
    //     ? action.ItemID
    //     : action.ItemID + action.extensions.Extension1;
    case "ADD_TO_CART":
      console.log("ATC");
      console.log(action);
      return [...cartProducts, { InvtID: action.product }];
    case "REMOVE_FROM_CART":
      return cartProducts.filter(item => item.id !== action.product.id);
    case "CLEAR_CART":
      return [];
    default:
      throw new Error("Cart reducer error");
  }
};

export default cartReducer;
