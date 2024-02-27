import { FormEvent, useState } from 'react';
import {
  FaCcVisa as IconVisa,
  FaCcMastercard as IconMasterCard,
  FaCcDinersClub as IconDinersClub,
} from 'react-icons/fa6';
import { SiAmericanexpress as IconAmex } from 'react-icons/si';
import Heading from '../../../ui/Heading/Heading';
import InputField from '../../../ui/InputField/InputField';

const paymentOption = [
  { name: 'visa', icon: <IconVisa /> },
  { name: 'mastercard', icon: <IconMasterCard /> },
  { name: 'american express', icon: <IconAmex /> },
  { name: 'diners club', icon: <IconDinersClub /> },
];

const BillingDetails = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    cardOwner: '',
    cardNumber: '',
    card: 'visa',
    expirationMonth: '',
    expirationYear: '',
    cvv: '',
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
      cvv: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
        value={formData.expirationMonth}
        onChange={handleChangeData}
      />
      <select
        value={formData.card}
        onChange={(e) =>
          setFormData((oldValue) => ({ ...oldValue, card: e.target.value }))
        }
        className="border border-emerald-400 px-4 py-1 rounded-md text-emerald-600 font-bold placeholder:text-neutral-400 outline-none focus:ring focus:ring-emerald-200 focus:ring-offset-0"
      >
        {paymentOption.map((opt) => (
          <option key={opt.name}>{opt.name}</option>
        ))}
      </select>
      <span>
        {paymentOption.find((ele) => ele.name === formData.card)?.icon}
      </span>
    </form>
  );
};

export default BillingDetails;
