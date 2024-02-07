import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
      <header>header</header>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
};

export default AppLayout;
