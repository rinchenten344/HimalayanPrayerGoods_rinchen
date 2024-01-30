import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { store } from "./redux/store.jsx";
import Product from "./components/Product";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import himalay from "./images/himalaya.png";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${himalay})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };
  return (
    <Provider store={store}>
      <Router>
        <div style={backgroundStyle}>
          <NavBar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/dashboard"
              element={<ProtectedRoute element={Dashboard} />}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
