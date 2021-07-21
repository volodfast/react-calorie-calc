import { MealProductType } from 'modules/meal/containers/MealCalorieCalculator/MealCalorieCalculator';

export type ProductFormProps = {
  product: MealProductType;
  onChangeProduct: (product: MealProductType) => void;
  onRemoveProduct: (id: string) => void;
};
