import React from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductItem from "./components/ProductItem";
import "./styles/HomePage.css";
const App = () => {
  return (
    <div>
      <Navbar />
      <ProductList />
    </div>
  );
};

export default App;
