import BillingDetails from './components/BillingDetails';
import OrderSummary from './components/OrderSummary';

const CheckoutPage = () => {
  return (
    <main className="flex justify-center gap-10">
      <BillingDetails />
      <OrderSummary />
    </main>
  );
};

export default CheckoutPage;
