import BillingDetails from './components/BillingDetails';
import OrderSummary from './components/OrderSummary';

const CheckoutPage = () => {
  return (
    <main className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-10 px-8">
      <OrderSummary />
      <BillingDetails />
    </main>
  );
};

export default CheckoutPage;
