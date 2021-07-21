export type MealProductType = {
  id: string;
  name: string;
  caloriesPer100g: number;
  weight: number;
};

export type MealCalculatorState = {
  total: number;
  productList: MealProductType[];
};

export enum MealCalculatorActionEnum {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  CHANGE_PRODUCT = 'CHANGE_PRODUCT',
}

export type MealCalculatorAction =
  | { type: MealCalculatorActionEnum.ADD_PRODUCT }
  | { type: MealCalculatorActionEnum.REMOVE_PRODUCT; id: string }
  | { type: MealCalculatorActionEnum.CHANGE_PRODUCT; product: MealProductType };
