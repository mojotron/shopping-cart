import CartIndicator from '../CartIndicator/CartIndicator';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <div className="fixed w-full top-0 left-0 right-0 z-50 flex justify-between items-center p-5 bg-emerald-700">
      <Logo />
      <Navigation />
      <CartIndicator />
    </div>
  );
};

export default Header;
