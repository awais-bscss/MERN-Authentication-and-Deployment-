import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFromData] = useState({
    name: "",
    email: "",
  });
  const { email, password } = formData;
  const onChange = (e) => {
    setFromData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("user login ");
  };
  return (
    <div>
      <h1>Log In</h1>
      <p>Log in to your Acount</p>
      <form onSubmit={(e) => onSubmit(e)} action="POST">
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Adress"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder=" Password"
            value={password}
            onChange={(e) => onChange(e)}
            required
            minLength="6"
          />
        </div>
        <input type="submit" value="Log in" />
        <p>
          Not Registered Yet? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
