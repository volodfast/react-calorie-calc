import React, { FC, useCallback, useReducer } from 'react';
import { Box } from '@material-ui/core';
// components
import ProductForm from 'modules/product/containers/components/ProductForm';

export type MealProductType = {
  name: string;
  caloriesPer100g: number;
  weight: number;
};

type MealCalculatorState = {
  total: number;
  productList: MealProductType[];
};

enum MealCalculatorActionEnum {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  CHANGE_PRODUCT = 'CHANGE_PRODUCT',
}

type MealCalculatorAction =
  | { type: MealCalculatorActionEnum.ADD_PRODUCT }
  | { type: MealCalculatorActionEnum.REMOVE_PRODUCT }
  | { type: MealCalculatorActionEnum.CHANGE_PRODUCT };

const initialMealCalculatorState: MealCalculatorState = {
  total: 0,
  productList: [
    {
      name: 'Buckwheat',
      caloriesPer100g: 330,
      weight: 120,
    },
  ],
};

function reducer(state: MealCalculatorState, action: MealCalculatorAction) {
  switch (action.type) {
    case MealCalculatorActionEnum.ADD_PRODUCT: {
      return state;
    }

    case MealCalculatorActionEnum.REMOVE_PRODUCT: {
      return state;
    }

    case MealCalculatorActionEnum.CHANGE_PRODUCT: {
      return state;
    }

    default: {
      return state;
    }
  }
}

const MealCaloriCalculator: FC = () => {
  const [{ productList, total }, dispatch] = useReducer(
    reducer,
    initialMealCalculatorState
  );

  const handleChangeProduct = useCallback(() => {}, []);

  return (
    <Box>
      <Box>Meal Calorie Calculator</Box>
      <Box>
        <Box>
          Total: <Box component="span">{total}</Box>
        </Box>
      </Box>
      <Box>
        {productList.map((product) => {
          return (
            <ProductForm
              product={product}
              changeProduct={handleChangeProduct}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default MealCaloriCalculator;
