import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section>
      <div>
        <div>
          <h1>Web Development</h1>
          <p>Learn new skills and build amazing projects every day</p>
        </div>
        <div>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
