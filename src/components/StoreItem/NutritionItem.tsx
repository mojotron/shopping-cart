const NutritionItem = ({
  value,
  label,
}: {
  value: number | string;
  label: string;
}) => {
  return (
    <li className="flex flex-col justify-center items-center border rounded-lg size-12 bg-orange-50 border-green-400 ">
      <span className="text-sm font-righteous text-green-600">{value}</span>
      <span className="text-xs text-gray-800">{label}</span>
    </li>
  );
};

export default NutritionItem;
