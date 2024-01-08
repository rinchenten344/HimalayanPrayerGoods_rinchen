import { combineReducers } from "redux";
import productReducer from "./ProductReducer";

const rootReducer = combineReducers({
  products: productReducer,
  // Add more reducers if needed
});

export default rootReducer;
