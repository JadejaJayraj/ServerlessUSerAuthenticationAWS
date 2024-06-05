import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_REGISTER_LAMBDA_API_ENDPOINT,
        { username, password }
      );
      if (response.status === 200) {
        navigate("/profile", { state: { username } });
      }
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
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
      <button onClick={handleRegister}>Register</button>
      <p>
        Already registered? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default Register;
