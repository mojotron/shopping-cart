import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { useCart } from '../../hooks/useCart';
import Cart from '../../components/Cart/Cart';

const AppLayout = () => {
  const { showCart } = useCart();

  return (
    <main className="flex flex-col">
      <Header />
      <Outlet />
      <footer>footer</footer>

      {showCart && <Cart />}
    </main>
  );
};

export default AppLayout;
