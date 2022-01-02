import {
  MealProductType,
  MealType,
} from 'modules/meal/containers/MealCalorieCalculator/MealCalorieCalculator.interface';

export type MealTextRepresentationProps = {
  productList: MealProductType[];
  mealType?: MealType;
};
