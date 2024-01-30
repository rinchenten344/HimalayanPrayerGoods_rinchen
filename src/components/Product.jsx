import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts } from "../redux/productsSlice";
import { addToCart } from "../redux/cartSlice";
import "../mystyles/Product.css";

function Product() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  const productsContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: "20px",
    padding: "20px",
    backgroundColor: "rgba(169, 169, 169, 0.8)",
  };
  const imageStyle = {
    width: "250px", // Set a fixed width
    height: "250px", // Set a fixed height
    objectFit: "cover", // This will ensure the aspect ratio is maintained without distortion
    borderRadius: "4px",
  };

  return (
    <div style={productsContainerStyle}>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <h3>{product.productName}</h3>
          <img
            src={product.productImage}
            alt={product.productName}
            style={imageStyle}
          />
          <p>${product.price}</p>
          <button onClick={() => dispatch(addToCart(product.id))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Product;
