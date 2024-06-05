import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_LOGIN_LAMBDA_API_ENDPOINT,
        {
          username,
          password,
        }
      );
      if (response.status === 200) {
        navigate("/profile", { state: { username } });
      }
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      <p>
        New User? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
