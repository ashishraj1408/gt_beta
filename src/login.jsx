import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // For testing purposes, we'll check for a specific email and password
    if (email === "user@greentiger.in" && password === "password123") {
      navigate("/dashboard"); // Navigate to the welcome page upon successful login
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src={`${process.env.PUBLIC_URL}/image.png`}
          alt="Green Tiger Logo"
          className="logo"
        />
        <h1>GREEN TIGER</h1>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="user@greentiger.in"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Continue</button>
      </div>
    </div>
  );
}

export default Login;
