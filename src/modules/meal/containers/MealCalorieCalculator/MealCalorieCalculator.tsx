import { FC, useMemo } from 'react';
import { Box, Button } from '@material-ui/core';
// components
import ProductForm from 'modules/product/components/ProductForm';
import DropdownToggler from 'modules/core/components/DropdownToggler';
import MealTextRepresentation from 'modules/meal/components/MealTextRepresentation';
// hooks
import {
  useMealType,
  useProductList,
  useTotalCaloriesBody,
} from './MealCalorieCalculator.hook';
// interfaces
import { MealType } from './MealCalorieCalculator.interface';
// styles
import { useMealCalorieCalculatorStyles } from './MealCalorieCalculator.styled';

const MealCalorieCalculator: FC = () => {
  const { productList, addProduct, changeProduct, removeProduct } =
    useProductList();

  const { isOpen: isTotalBodyOpen, toggle: toggleOpenTotalBody } =
    useTotalCaloriesBody();

  const { mealType, mealTypeList, changeMealType } = useMealType();

  const total = useMemo(
    () =>
      productList.reduce((acc, product) => {
        return acc + (product.weight * product.caloriesPer100g) / 100;
      }, 0),
    [productList]
  );

  const classNames = useMealCalorieCalculatorStyles();

  return (
    <Box className={classNames.container}>
      <Box className={classNames.infoContainer}>
        <Box className={classNames.title} component="h1">
          Meal Calorie Calculator
        </Box>
        <Box>
          <Box>Meal Type:</Box>
          <select
            value={mealType}
            onChange={(ev) => {
              const selectedMealType = ev.target.value as MealType;

              changeMealType(selectedMealType);
            }}
            defaultValue={''}
          >
            <option value="" disabled hidden>
              -- Select meal type --
            </option>
            {mealTypeList.map((mealTypeOption) => {
              return (
                <option key={mealTypeOption.value} value={mealTypeOption.value}>
                  {mealTypeOption.label}
                </option>
              );
            })}
          </select>
        </Box>
        <Box className={classNames.totalCalories}>
          <Box component="span" className={classNames.totalCaloriesText}>
            Total: <Box component="span">{total}</Box> kcal
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
                    <Box component="span">
                      {`${product.name || 'Unknown'}: `}
                    </Box>
                    <Box component="span">
                      {`${
                        (product.caloriesPer100g * product.weight) / 100
                      } kcal`}
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
      <MealTextRepresentation productList={productList} mealType={mealType} />
    </Box>
  );
};

export default MealCalorieCalculator;
