import React from 'react';
import BillingDetails from './components/BillingDetails';
import OrderSummary from './components/OrderSummary';

const CheckoutPage = () => {
  return (
    <div>
      <BillingDetails />
      <OrderSummary />
    </div>
  );
};

export default CheckoutPage;
