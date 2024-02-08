import CartIndicator from '../CartIndicator/CartIndicator';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-5 bg-emerald-700">
      <Logo />
      <Navigation />
      <CartIndicator />
    </div>
  );
};

export default Header;
