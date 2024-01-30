import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCart } from "../redux/cartSlice";
import { selectProducts } from "../redux/productsSlice";
import {
  addToCart,
  removeFromCart,
  increment,
  decrement,
} from "../redux/cartSlice";

function Cart() {
  const cartItems = useSelector(selectCart);
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  const getProductById = (id) => products.find((product) => product.id === id);

  const totalPrice = Object.keys(cartItems).reduce((total, id) => {
    const product = getProductById(id);
    return total + (product ? product.price * cartItems[id].quantity : 0);
  }, 0);

  if (Object.keys(cartItems).length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Make it full-height
          backgroundColor: "rgba(169, 169, 169, 0.5)", // Grey with 50% opacity
        }}
      >
        Your cart is empty.
      </div>
    );
  }

  return (
    <div>
      {Object.keys(cartItems).map((id) => {
        const product = getProductById(id);
        return (
          <div
            key={id}
            style={{
              display: "flex",
              flexDirection: "row", // Display images in a horizontal line
              alignItems: "center", // Center content vertically
              backgroundColor: "rgba(169, 169, 169, 0.5)", // Grey with 50% opacity
              margin: "10px",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {product && (
              <div style={{ marginRight: "10px" }}>
                <img
                  src={product.productImage}
                  alt={product.productName}
                  width="100"
                  height="100"
                />
              </div>
            )}
            <div>
              <h3>{product ? product.productName : "Product not found"}</h3>
              <p>Quantity: {cartItems[id].quantity}</p>
              <button onClick={() => dispatch(increment(id))}>+</button>
              <button onClick={() => dispatch(decrement(id))}>-</button>
              <button onClick={() => dispatch(removeFromCart(id))}>
                Remove
              </button>
            </div>
          </div>
        );
      })}
      <div>
        <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
      </div>
    </div>
  );
}

export default Cart;
