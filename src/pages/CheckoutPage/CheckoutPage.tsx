import BillingDetails from './components/BillingDetails';
import OrderSummary from './components/OrderSummary';

const CheckoutPage = () => {
  return (
    <main className="flex flex-col items-center">
      <BillingDetails />
      <OrderSummary />
    </main>
  );
};

export default CheckoutPage;
