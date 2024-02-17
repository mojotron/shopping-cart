type PropsType = {
  price: number;
  unit: string;
};

const PriceTag = ({ price, unit }: PropsType) => {
  return (
    <p className="text-emerald-600 flex gap-2 items-end">
      <span className="text-2xl font-righteous">{price.toFixed(2)}</span>
      <span className="text-md font-bold">{unit}</span>
    </p>
  );
};

export default PriceTag;
