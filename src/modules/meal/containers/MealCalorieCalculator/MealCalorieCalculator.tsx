import { FC, useCallback, useReducer } from 'react';
import { Box, Button } from '@material-ui/core';
import { nanoid } from 'nanoid';
// components
import ProductForm from 'modules/product/components/ProductForm';
// styles
import { useMealCalorieCalculatorStyles } from './MealCalorieCalculator.styled';
// interfaces
import {
  MealCalculatorAction,
  MealCalculatorActionEnum,
  MealCalculatorState,
  MealProductType,
} from './MealCalorieCalculator.interface';

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
      const updatedState: MealCalculatorState = {
        ...state,
        productList: state.productList.filter(
          (product) => product.id !== action.id
        ),
      };

      return updatedState;
    }

    case MealCalculatorActionEnum.CHANGE_PRODUCT: {
      const updatedState: MealCalculatorState = {
        ...state,
        productList: state.productList.map((product) => {
          if (product.id !== action.product.id) {
            return product;
          }

          return action.product;
        }),
      };

      return updatedState;
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

  const handleChangeProduct = useCallback((product: MealProductType) => {
    dispatch({ type: MealCalculatorActionEnum.CHANGE_PRODUCT, product });
  }, []);

  const handleAddProduct = useCallback(() => {
    dispatch({ type: MealCalculatorActionEnum.ADD_PRODUCT });
  }, []);

  const handleRemoveProduct = useCallback((id: string) => {
    dispatch({ type: MealCalculatorActionEnum.REMOVE_PRODUCT, id });
  }, []);

  const classNames = useMealCalorieCalculatorStyles();

  return (
    <Box className={classNames.container}>
      <Box className={classNames.infoContainer}>
        <Box className={classNames.title} component="h1">
          Meal Calorie Calculator
        </Box>
        <Box className={classNames.totalCalorie}>
          Total: <Box component="span">{total}</Box>
        </Box>
      </Box>
      <Box className={classNames.controls}>
        <Button variant="contained" color="primary" onClick={handleAddProduct}>
          Add Product
        </Button>
      </Box>
      {productList.length ? (
        <Box className={classNames.productList}>
          {productList.map((product) => {
            return (
              <Box key={product.id} className={classNames.productWrapper}>
                <ProductForm
                  product={product}
                  onChangeProduct={handleChangeProduct}
                  onRemoveProduct={handleRemoveProduct}
                />
              </Box>
            );
          })}
        </Box>
      ) : (
        <Box className={classNames.productListPlaceholder}>
          Add some products into your meal!
        </Box>
      )}
    </Box>
  );
};

export default MealCaloriCalculator;
