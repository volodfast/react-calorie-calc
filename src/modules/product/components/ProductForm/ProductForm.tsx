import { FC, useCallback } from 'react';
import { Box, TextField } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
// styles
import { useProductFromStyles } from './ProductForm.styled';
// interfaces
import { ProductFormProps } from './ProductForm.interface';

const ProductForm: FC<ProductFormProps> = (props) => {
  const { product, onChangeProduct, onRemoveProduct } = props;

  const handleChangeProduct = useCallback(() => {
    onChangeProduct(product.id);
  }, [onChangeProduct, product.id]);

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
          onChange={handleChangeProduct}
        />
      </Box>
      <Box>
        <TextField
          className={classes.input}
          id="calories"
          label="Calories (kcal per 100g)"
          value={product.caloriesPer100g}
          onChange={handleChangeProduct}
        />
      </Box>
      <Box>
        <TextField
          className={classes.input}
          id="weight"
          label="Weight (grams)"
          value={product.weight}
          onChange={handleChangeProduct}
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
