import { ChangeEvent, FormEvent, useState } from 'react';

import Heading from '../../../ui/Heading/Heading';
import InputField from '../../../ui/InputField/InputField';
import CardSelect, { CardOptionType } from './CardSelect';
import SubmitButton from '../../../ui/SubmitButton/SubmitButton';

type FormDataType = {
  firstName: string;
  lastName: string;
  address: string;
  cardOwner: string;
  cardNumber: string;
  card: CardOptionType;
  expirationMonth: string;
  expirationYear: string;
  cvc: string;
};

const BillingDetails = () => {
  const [formData, setFormData] = useState<FormDataType>({
    firstName: '',
    lastName: '',
    address: '',
    cardOwner: '',
    cardNumber: '',
    card: 'visa',
    expirationMonth: '',
    expirationYear: '',
    cvc: '',
  });

  const handleChangeData = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((oldValue) => ({ ...oldValue, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(JSON.stringify(formData));
    setFormData({
      firstName: '',
      lastName: '',
      address: '',
      cardOwner: '',
      cardNumber: '',
      card: 'visa',
      expirationMonth: '',
      expirationYear: '',
      cvc: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Heading level={3}>Enter payment information</Heading>
      <Heading level={4}>Billing Information</Heading>
      <InputField
        id="billing-first-name"
        label="first name"
        name="firstName"
        placeholder="enter first name"
        value={formData.firstName}
        onChange={handleChangeData}
      />
      <InputField
        id="billing-last-name"
        label="last name"
        name="lastName"
        placeholder="enter last name"
        value={formData.lastName}
        onChange={handleChangeData}
      />
      <InputField
        id="billing-address"
        label="address"
        name="address"
        placeholder="enter address"
        value={formData.address}
        onChange={handleChangeData}
      />
      <Heading level={4}>Credit Card Information</Heading>
      <InputField
        id="billing-card-name"
        label="card owner name"
        name="cardOwner"
        placeholder="enter card owner name"
        value={formData.cardOwner}
        onChange={handleChangeData}
      />
      <InputField
        id="billing-card-number"
        label="card number"
        name="cardNumber"
        placeholder="1234 5678 1234 5678"
        value={formData.cardNumber}
        onChange={handleChangeData}
      />

      <div className="flex">
        <InputField
          id="billing-card-expiration-month"
          label="expiration month"
          name="expirationMonth"
          placeholder="--"
          value={formData.expirationMonth}
          onChange={handleChangeData}
        />
        <InputField
          id="billing-card-expiration-year"
          label="expiration year"
          name="expirationYear"
          placeholder="--"
          value={formData.expirationYear}
          onChange={handleChangeData}
        />
        <InputField
          id="billing-card-expiration-month"
          label="cvc"
          name="expirationMonth"
          placeholder="---"
          value={formData.cvc}
          onChange={handleChangeData}
        />
      </div>

      <CardSelect
        selectedCard={formData.card}
        onSelect={(card) => setFormData((oldValue) => ({ ...oldValue, card }))}
      />

      <SubmitButton>Complete Order</SubmitButton>
    </form>
  );
};

export default BillingDetails;
