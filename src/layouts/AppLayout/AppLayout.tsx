import { Outlet } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import Header from '../../components/Header/Header';
import Cart from '../../components/Cart/Cart';
import Footer from '../../components/Footer/Footer';

const AppLayout = () => {
  const { showCart } = useCart();

  return (
    <main className="flex flex-col pt-36 w-screen">
      <Header />
      <Outlet />
      <Footer />
      {showCart && <Cart />}
    </main>
  );
};

export default AppLayout;
