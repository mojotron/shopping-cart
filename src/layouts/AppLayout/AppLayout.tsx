import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

const AppLayout = () => {
  return (
    <main className="flex flex-col">
      <Header />
      <Outlet />
      <footer>footer</footer>
    </main>
  );
};

export default AppLayout;
