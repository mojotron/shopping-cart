import React from "react";
import { Link } from "react-router-dom";
import "../styles/Error.css";

const Error = () => {
  return (
    <section className="Error">
      <h1 className="Error__heading">404 Page not Found</h1>
      <Link className="Error__home-link" to="/">
        back to home
      </Link>
    </section>
  );
};

export default Error;
