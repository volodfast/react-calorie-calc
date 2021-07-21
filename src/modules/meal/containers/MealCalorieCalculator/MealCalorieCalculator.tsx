import { FC, useCallback, useReducer } from 'react';
import { Box, Button } from '@material-ui/core';
import { nanoid } from 'nanoid';
// components
import ProductForm from 'modules/product/containers/components/ProductForm';

export type MealProductType = {
  id: string;
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
      id: nanoid(),
      name: 'Buckwheat',
      caloriesPer100g: 330,
      weight: 120,
    },
  ],
};

function reducer(state: MealCalculatorState, action: MealCalculatorAction) {
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

  const addProduct = useCallback(() => {
    dispatch({ type: MealCalculatorActionEnum.ADD_PRODUCT });
  }, []);

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
              key={product.id}
              product={product}
              changeProduct={handleChangeProduct}
            />
          );
        })}
      </Box>
      <Box style={{ textAlign: 'center' }}>
        <Button variant="contained" color="primary" onClick={addProduct}>
          Add Product
        </Button>
      </Box>
    </Box>
  );
};

export default MealCaloriCalculator;