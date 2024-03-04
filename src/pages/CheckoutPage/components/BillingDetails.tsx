import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from '../../../ui/Heading/Heading';
import InputField from '../../../ui/InputField/InputField';
import CardSelect, { CardOptionType } from './CardSelect';
import SubmitButton from '../../../ui/SubmitButton/SubmitButton';
import { useCart } from '../../../hooks/useCart';

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
  const { clearCart } = useCart();
  const navigate = useNavigate();
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
    alert(
      'This will we refactoren when express is added, this is just cosmetic form!'
    );
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
    clearCart();
    navigate('/');
  };

  // TODO form validation
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-[500px]">
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

      <div className="grid grid-cols-3 gap-6 w-full border items-end">
        <InputField
          id="billing-card-expiration-month"
          label="expiry month"
          name="expirationMonth"
          placeholder="--"
          value={formData.expirationMonth}
          onChange={handleChangeData}
        />
        <InputField
          id="billing-card-expiration-year"
          label="expiry year"
          name="expirationYear"
          placeholder="--"
          value={formData.expirationYear}
          onChange={handleChangeData}
        />
        <InputField
          id="billing-card-expiration-month"
          label="cvc"
          name="cvc"
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
