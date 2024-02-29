import { useCart } from '../../../hooks/useCart';
import Heading from '../../../ui/Heading/Heading';

const OrderSummary = () => {
  const { cart } = useCart();

  return (
    <section>
      <Heading level={3}>Order Summary</Heading>
      <ul className="flex flex-col gap-3 mt-4">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex items-center gap-3 font-bold text-neutral-600"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <p className="flex gap-3">
              <span>{item.name}</span>
              <span>{`x ${item.quantity}`}</span>
              <span className="text-emerald-500">{`${(item.quantity * item.price).toFixed(2)} €`}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OrderSummary;
