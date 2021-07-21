import { ChangeEvent, FC, useCallback } from 'react';
import { Box, TextField } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
// styles
import { useProductFromStyles } from './ProductForm.styled';
// interfaces
import { ProductFormProps } from './ProductForm.interface';
import { MealProductType } from 'modules/meal/containers/MealCalorieCalculator/MealCalorieCalculator';

const ProductForm: FC<ProductFormProps> = (props) => {
  const { product, onChangeProduct, onRemoveProduct } = props;

  const createProductChangeHandler = useCallback(
    (field: keyof MealProductType) => {
      return (ev: ChangeEvent<HTMLInputElement>) => {
        let updatedField: string | number = ev.target.value;

        if (field === 'caloriesPer100g' || field === 'weight') {
          updatedField = parseFloat(updatedField);

          if (Number.isNaN(updatedField)) {
            updatedField = 0;
          }
        }

        const updatedProduct: MealProductType = {
          ...product,
          [field]: updatedField,
        };

        onChangeProduct(updatedProduct);
      };
    },
    [onChangeProduct, product]
  );

  const handleRemoveProduct = useCallback(() => {
    onRemoveProduct(product.id);
  }, [onRemoveProduct, product.id]);

  const classes = useProductFromStyles();

  return (
    <Box className={classes.container}>
      <Box
        className={classes.closeIcon}
        component="span"
        onClick={handleRemoveProduct}
      >
        <CloseIcon />
      </Box>
      <Box className={classes.title} component="h4">
        Product
      </Box>
      <Box>
        <TextField
          className={classes.input}
          id="name"
          label="Product Name"
          value={product.name}
          onChange={createProductChangeHandler('name')}
        />
      </Box>
      <Box>
        <TextField
          className={classes.input}
          id="calories"
          label="Calories (kcal per 100g)"
          value={product.caloriesPer100g}
          onChange={createProductChangeHandler('caloriesPer100g')}
        />
      </Box>
      <Box>
        <TextField
          className={classes.input}
          id="weight"
          label="Weight (grams)"
          value={product.weight}
          onChange={createProductChangeHandler('weight')}
        />
      </Box>

      <Box className={classes.overallInfo}>
        <Box>Overall calories: </Box>
        <Box component="span" className={classes.totalCalories}>
          {(product.weight * product.caloriesPer100g) / 100}
        </Box>
        <Box component="span"> kcal</Box>
      </Box>
    </Box>
  );
};

export default ProductForm;
