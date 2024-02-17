import { NutritionType } from './nutritionType';

export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  sellingUnit: string;
  available: boolean;
  imageUrl: string;
  nutrition: NutritionType;
};
