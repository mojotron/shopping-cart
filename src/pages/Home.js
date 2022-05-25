import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <h1>Home page</h1>
      <Link to="/shop">Shop</Link>
    </section>
  );
};

export default Home;
