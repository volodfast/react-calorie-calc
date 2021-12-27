import { useCallback, useReducer } from 'react';
import { nanoid } from 'nanoid';
import {
  MealCalculatorAction,
  MealCalculatorActionEnum,
  MealCalculatorState,
  MealProductType,
} from './MealCalorieCalculator.interface';

const defaultInitialProductListState: MealCalculatorState = {
  productList: [],
};

const productListReducer = (
  state: MealCalculatorState,
  action: MealCalculatorAction
): MealCalculatorState => {
  switch (action.type) {
    case MealCalculatorActionEnum.ADD_PRODUCT: {
      const newMeal: MealProductType = {
        id: nanoid(),
        name: '',
        caloriesPer100g: 0,
        weight: 0,
      };

      const updatedState: MealCalculatorState = {
        ...state,
        productList: [...state.productList, newMeal],
      };

      return updatedState;
    }

    case MealCalculatorActionEnum.REMOVE_PRODUCT: {
      const updatedState: MealCalculatorState = {
        ...state,
        productList: state.productList.filter(
          (product) => product.id !== action.id
        ),
      };

      return updatedState;
    }

    case MealCalculatorActionEnum.CHANGE_PRODUCT: {
      const updatedProductList: MealProductType[] = state.productList.map(
        (product) => {
          if (product.id !== action.product.id) {
            return product;
          }

          return action.product;
        }
      );

      const updatedState: MealCalculatorState = {
        ...state,
        productList: updatedProductList,
      };

      return updatedState;
    }

    default: {
      return state;
    }
  }
};
export const useProductList = (initialState?: MealCalculatorState) => {
  const [{ productList }, dispatch] = useReducer(
    productListReducer,
    initialState || defaultInitialProductListState
  );

  const changeProduct = useCallback((product: MealProductType) => {
    dispatch({ type: MealCalculatorActionEnum.CHANGE_PRODUCT, product });
  }, []);

  const addProduct = useCallback(() => {
    dispatch({ type: MealCalculatorActionEnum.ADD_PRODUCT });
  }, []);

  const removeProduct = useCallback((id: string) => {
    dispatch({ type: MealCalculatorActionEnum.REMOVE_PRODUCT, id });
  }, []);

  return {
    productList,
    changeProduct,
    addProduct,
    removeProduct,
  };
};
