import React, { useState } from "react";
import "../mystyles/Login.css";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await login(username, password);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
      setError(null);
    } catch (error) {
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  // Handle signup logic here or redirect to signup page
  const handleSignup = () => {
    // Signup logic or redirection
  };

  return (
    <div className="login-container">
      <h2>Login or Sign up</h2>
      <form className="myloginform" onSubmit={handleLogin}>
        <label className="user">
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label className="password">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button className="Login" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        <button className="signup" type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Login;
