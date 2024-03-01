import CartIndicator from '../CartIndicator/CartIndicator';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className="fixed w-full top-0 left-0 right-0 z-40 flex justify-between items-center p-5 bg-green-100">
      <Logo />
      <Navigation />
      <CartIndicator />
    </header>
  );
};

export default Header;
