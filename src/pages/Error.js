import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section>
      <h1>404</h1>
      <h2>Page not Found</h2>
      <Link to="/">back to home</Link>
    </section>
  );
};

export default Error;
