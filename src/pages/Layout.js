import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar cartLength={props.cartLength} />
      <section className="layout-wrapper">
        <Outlet />
      </section>
    </>
  );
};

export default Layout;
