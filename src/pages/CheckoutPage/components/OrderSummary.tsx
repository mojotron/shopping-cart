const paymentOption = [
  { name: 'visa', icon: '' },
  { name: 'mastercard', icon: '' },
  { name: 'american express', icon: '' },
  { name: 'diners', icon: '' },
];

const OrderSummary = () => {
  return (
    <form>
      <select>
        {paymentOption.map((opt) => (
          <option key={opt.name}>{opt.name}</option>
        ))}
      </select>
    </form>
  );
};

export default OrderSummary;
