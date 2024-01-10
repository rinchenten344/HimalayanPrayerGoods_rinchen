import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/productActions";
import "../styles/ProductPage.css";

const ProductPage = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleAddToCart = (productId) => {
    dispatch(addToCart(productId));
  };

  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imagePromises = products.map(async (product) => {
        const module = await product.imageSrc;
        return module.default;
      });
      const resolvedImages = await Promise.all(imagePromises);
      setProductImages(resolvedImages);
    };

    fetchImages();
  }, [products]);

  return (
    <div>
      <h1 className="mypro">
        <span>OUR PRODUCTS</span>
      </h1>
      <ul className="product-list">
        {products.map((product, index) => (
          <li key={product.id} className="product-item">
            <img
              src={productImages[index]}
              alt={product.name}
              className="product-image"
            />
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>
              <button onClick={() => handleAddToCart(product.id)}>
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductPage;
