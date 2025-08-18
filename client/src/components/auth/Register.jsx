import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpass: "",
  });
  const { name, email, password, confirmpass } = formData;

  const onChange = (e) => {
    setFromData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmpass) {
      alert("passwors must match");
    } else {
      console.log(formData);
    }
  };
  return (
    <div>
      <h1>Register Your Acount</h1>

      <form onSubmit={(e) => onSubmit(e)} action="POST">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
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
        <div>
          <input
            type="password"
            name="confirmpass"
            placeholder=" Confirm Password"
            value={confirmpass}
            onChange={(e) => onChange(e)}
            required
            minLength="6"
          />
        </div>
        <input type="submit" value="Register" />
        <p>
          Already Have an Acount? <Link to="/login"> Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
