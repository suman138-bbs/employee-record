import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import "./login.style.css";
import { UserContext } from "../../context/user.context";

const Login = () => {
  const { setCurrentUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleLogin = () => {
    if (!username) {
      setErrors({ ...errors, username: "Please Provide username" });
    } else if (!password) {
      setErrors({ username: "", password: "Please Provide password" });
    } else {
      setCurrentUser({ username, password });
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <span>{errors.username}</span>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
        </div>
        <span>{errors.password}</span>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
