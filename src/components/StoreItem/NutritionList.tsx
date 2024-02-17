import React from 'react';
import { NutritionType } from '../../types/nutritionType';

type PropsType = {
  data: NutritionType;
};

const NutritionItem = ({
  value,
  label,
}: {
  value: number | string;
  label: string;
}) => {
  return (
    <li className="flex flex-col justify-center items-center border rounded-lg w-14 h-12 bg-emerald-50 border-emerald-400 ">
      <span className="text-sm font-righteous text-emerald-600">{value}</span>
      <span className="text-xs text-neutral-800">{label}</span>
    </li>
  );
};

const NutritionList = ({ data }: PropsType) => {
  return (
    <div className="flex flex-wrap gap-2 items-center my-4">
      <NutritionItem value={data.calories} label="calories" />
      <NutritionItem value={`${data.fat}g`} label="fat" />
      <NutritionItem value={`${data.protein}g`} label="protein" />
      <NutritionItem value={`${data.carbs}g`} label="carbs" />
      <NutritionItem value={`${data.fiber}g`} label="fiber" />
      <h3 className="italic text-sm text-neutral-600 font-bold">
        {data.measure}
      </h3>
    </div>
  );
};

export default NutritionList;
