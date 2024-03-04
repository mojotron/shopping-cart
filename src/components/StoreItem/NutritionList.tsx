import { NutritionType } from '../../types/nutritionType';
import NutritionItem from './NutritionItem';

type PropsType = {
  data: NutritionType;
};

const NutritionList = ({ data }: PropsType) => {
  return (
    <div className="flex flex-wrap gap-2 items-center my-4">
      <NutritionItem value={data.calories} label="calories" />
      <NutritionItem value={`${data.fat}g`} label="fat" />
      <NutritionItem value={`${data.protein}g`} label="protein" />
      <NutritionItem value={`${data.carbs}g`} label="carbs" />
      <NutritionItem value={`${data.fiber}g`} label="fiber" />
      <h3 className="italic text-sm text-gray-800 font-bold">{data.measure}</h3>
    </div>
  );
};

export default NutritionList;
