import { MealProductType } from 'modules/meal/containers/MealCalorieCalculator/MealCalorieCalculator';

export type ProductFormProps = {
  product: MealProductType;
  onChangeProduct: (id: string) => void;
  onRemoveProduct: (id: string) => void;
};
