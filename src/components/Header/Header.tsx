import CartIndicator from '../CartIndicator/CartIndicator';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className="fixed w-full top-0 left-0 right-0 z-40 flex justify-between p-5 bg-green-100">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-16">
        <Logo />
        <Navigation />
      </div>
      <CartIndicator />
    </header>
  );
};

export default Header;
