import {
  MealProductType,
  MealType,
} from 'modules/meal/containers/MealCalorieCalculator/MealCalorieCalculator.interface';

export type MealTextRepresentationProps = {
  date: Date;
  productList: MealProductType[];
  mealType?: MealType;
};
