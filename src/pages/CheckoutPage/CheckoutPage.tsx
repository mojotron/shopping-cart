import TotalPrice from '../../components/TotalPrice/TotalPrice';
import { useCart } from '../../hooks/useCart';
import BillingDetails from './components/BillingDetails';
import OrderSummary from './components/OrderSummary';

const CheckoutPage = () => {
  const { cart } = useCart();
  const isCartEmpty = cart.length < 1;
  return (
    <main className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 px-8">
      {isCartEmpty ? (
        <p className="text-lg font-bold text-orange-600 p-8">
          Cart is empty, go to store before completing purchase!
        </p>
      ) : (
        <>
          <div className="w-full flex flex-col items-center gap-8">
            <OrderSummary />
            <TotalPrice />
          </div>
          <BillingDetails />
        </>
      )}
    </main>
  );
};

export default CheckoutPage;
