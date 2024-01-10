import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ProductPage from "./components/ProductPage";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./redux/store";
import Footer from "./components/Footer";
import ShoppingCart from "./components/Cart/ShoppingCart";
import SearchBar from "./components/SearchBar";

const App = () => {
  const handleSearch = (searchTerm) => {
    console.log("Search term:", searchTerm);
  };

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <SearchBar onSearch={handleSearch} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <ShoppingCart />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
