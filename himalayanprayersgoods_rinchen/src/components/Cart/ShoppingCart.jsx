import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { removeFromCart } from "../../redux/actions/cartActions";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="shopping-cart">
      <h2></h2>
      {cartItems.length === 0 ? (
        <p></p>
      ) : (
        cartItems.map((item) => (
          <CartItem key={item.id} item={item} onRemove={handleRemoveFromCart} />
        ))
      )}
    </div>
  );
};

export default ShoppingCart;
