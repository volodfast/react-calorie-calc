import { FC, useCallback } from 'react';
import { Box, TextField } from '@material-ui/core';
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

  return (
    <Box style={{ textAlign: 'center' }}>
      <Box style={{ cursor: 'pointer' }} onClick={handleRemoveProduct}>
        Remove Product
      </Box>
      <Box>Select product or type product info by hand</Box>
      <Box>
        <TextField
          id="name"
          label="Product Name"
          value={product.name}
          onChange={handleChangeProduct}
        />
      </Box>
      <Box>
        <TextField
          id="calories"
          label="Calories (kcal per 100g)"
          value={product.caloriesPer100g}
          onChange={handleChangeProduct}
        />
      </Box>
      <Box>
        <TextField
          id="weight"
          label="Weight (grams)"
          value={product.weight}
          onChange={handleChangeProduct}
        />
      </Box>

      <Box>
        <Box>Overall information</Box>
        <Box>
          <Box component="span">Product: </Box>
          <Box component="span">{product.name}</Box>
        </Box>
        <Box>
          <Box component="span">{product.caloriesPer100g}</Box>
          <Box component="span"> kcal / 100 g</Box>
        </Box>
        <Box>
          <Box component="span">{product.weight}</Box>
          <Box component="span"> grams</Box>
        </Box>
        <Box>
          <Box component="span">Overall calories: </Box>
          <Box component="span">{product.weight * product.caloriesPer100g}</Box>
          <Box component="span"> kcal</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductForm;
