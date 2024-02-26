import React, { useState } from 'react';
import BillingDetails from './components/BillingDetails';
import OrderSummary from './components/OrderSummary';
import InputField from '../../ui/InputField/InputField';

const CheckoutPage = () => {
  const [cardData, setCardData] = useState({ name: '' });
  return (
    <div>
      <BillingDetails />
      <OrderSummary />
      <InputField
        id="temp"
        label="name"
        placeholder="enter name"
        value={cardData.name}
        onChange={(value: string) =>
          setCardData((oldValue) => ({ ...oldValue, name: value }))
        }
        type="text"
      />
    </div>
  );
};

export default CheckoutPage;
