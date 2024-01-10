const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Implement logic to add item to the cart
      return state;
    case "REMOVE_FROM_CART":
      // Implement logic to remove item from the cart
      return state;
    default:
      return state;
  }
};

export default cartReducer;
