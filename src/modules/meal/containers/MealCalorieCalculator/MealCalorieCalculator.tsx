import { FC } from 'react';
import { Box, Button } from '@material-ui/core';
// components
import ProductForm from 'modules/product/components/ProductForm';
import DropdownToggler from 'modules/core/components/DropdownToggler';
// hooks
import {
  useProductList,
  useTotalCaloriesBody,
} from './MealCalorieCalculator.hook';
// styles
import { useMealCalorieCalculatorStyles } from './MealCalorieCalculator.styled';

const MealCalorieCalculator: FC = () => {
  const { productList, addProduct, changeProduct, removeProduct } =
    useProductList();

  const { isOpen: isTotalBodyOpen, toggle: toggleOpenTotalBody } =
    useTotalCaloriesBody();

  const total = productList.reduce((acc, product) => {
    return acc + (product.weight * product.caloriesPer100g) / 100;
  }, 0);

  const classNames = useMealCalorieCalculatorStyles();

  return (
    <Box className={classNames.container}>
      <Box className={classNames.infoContainer}>
        <Box className={classNames.title} component="h1">
          Meal Calorie Calculator
        </Box>
        <Box className={classNames.totalCalories}>
          <Box component="span" className={classNames.totalCaloriesText}>
            Total: <Box component="span">{total}</Box> kkal
          </Box>
          {productList.length > 0 && (
            <Box component="span">
              <DropdownToggler
                isOpen={isTotalBodyOpen}
                onClick={toggleOpenTotalBody}
              />
            </Box>
          )}
          {isTotalBodyOpen && (
            <Box className={classNames.productListInfo}>
              {productList.map((product) => {
                return (
                  <Box key={product.id} className={classNames.productInfo}>
                    <Box component="span">{`${
                      product.name || 'Unknown'
                    }: `}</Box>
                    <Box component="span">
                      {`${
                        (product.caloriesPer100g * product.weight) / 100
                      } kkal`}
                    </Box>
                  </Box>
                );
              })}
            </Box>
          )}
        </Box>
      </Box>
      <Box className={classNames.controls}>
        <Button variant="contained" color="primary" onClick={addProduct}>
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
                  onChangeProduct={changeProduct}
                  onRemoveProduct={removeProduct}
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

export default MealCalorieCalculator;
