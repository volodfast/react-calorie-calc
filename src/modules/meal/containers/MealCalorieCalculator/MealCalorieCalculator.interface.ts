export type MealProductType = {
  id: string;
  name: string;
  caloriesPer100g: number;
  weight: number;
};

export type MealCalculatorState = {
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

export type MealType = 'dinner' | 'supper' | 'intermeal' | 'breakfast';

export type MealTypeOption = {
  label: string;
  value: MealType;
};
