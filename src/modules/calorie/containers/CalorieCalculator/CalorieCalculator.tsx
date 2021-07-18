import React, { useState, useCallback } from 'react';
import { Box, TextField } from '@material-ui/core';

const CalorieCalculator = () => {
  const [product, setProduct] = useState('');

  const handleProductChange = useCallback(
    (ev: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setProduct(ev.target.value);
    },
    []
  );

  const [calories, setCalories] = useState<number | ''>('');

  const handleCaloriesChange = useCallback(
    (ev: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const newCalories = parseInt(ev.target.value);

      console.log('newCalories: ', newCalories);

      if (typeof newCalories === 'number' && !Number.isNaN(newCalories)) {
        setCalories(newCalories);
      }
    },
    []
  );

  const [extra, setExtra] = useState('');

  const handleExtraChange = useCallback(
    (ev: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setExtra(ev.target.value);
    },
    []
  );

  return (
    <Box style={{ textAlign: 'center' }}>
      <div>Select product or type required info</div>
      <Box>
        <TextField
          id="product"
          label="Product"
          value={product}
          onChange={handleProductChange}
        />
      </Box>
      <Box>
        <TextField
          id="calories"
          label="Calories (kcal per 100g)"
          value={calories}
          onChange={handleCaloriesChange}
        />
      </Box>
      <Box>
        <TextField
          id="extraInfo"
          label="Extra information"
          value={extra}
          onChange={handleExtraChange}
        />
      </Box>

      <Box>
        <Box>Overall information</Box>
        <Box>
          <Box component="span">Product: </Box>
          <Box component="span">{product}</Box>
        </Box>
        <Box>
          <Box component="span">{calories}</Box>
          <Box component="span"> kcal / 100 g</Box>
        </Box>
        <Box>
          <Box component="span">Extra information: </Box>
          <Box component="span">{extra}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CalorieCalculator;
