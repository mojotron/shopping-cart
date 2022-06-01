import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = (props) => {
  return (
    <>
      <Navbar cartLength={props.cartLength} />
      <section className="layout-wrapper">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default Layout;
