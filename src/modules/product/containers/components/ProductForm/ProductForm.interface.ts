import { MealProductType } from 'modules/meal/containers/MealCalorieCalculator/MealCalorieCalculator';

export type ProductFormProps = {
  product: MealProductType;
  changeProduct: () => void;
};
