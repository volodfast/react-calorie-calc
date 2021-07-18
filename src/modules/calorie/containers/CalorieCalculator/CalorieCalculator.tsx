import React, { useState, useCallback } from 'react';
import { Box, Button, TextField } from '@material-ui/core';

const CalorieCalculator = () => {
  const [product, setProduct] = useState('');

  const handleProductChange = useCallback(
    (ev: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setProduct(ev.target.value);
    },
    []
  );

  const [calories, setCalories] = useState(0);

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

  const [weight, setWeight] = useState(0);

  const handleWeightChange = useCallback(
    (ev: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const newWeight = parseInt(ev.target.value);

      if (typeof newWeight === 'number' && !Number.isNaN(newWeight)) {
        setWeight(newWeight);
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

  const overallCalories = (weight * calories) / 100;

  return (
    <Box style={{ textAlign: 'center' }}>
      <Box>Select product or type required info</Box>
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
          id="weight"
          label="Weight (grams)"
          value={weight}
          onChange={handleWeightChange}
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
          <Box component="span">{weight}</Box>
          <Box component="span"> grams</Box>
        </Box>
        <Box>
          <Box component="span">Overall calories: </Box>
          <Box component="span">{overallCalories}</Box>
          <Box component="span"> kcal</Box>
        </Box>
        <Box>
          <Box component="span">Extra information: </Box>
          <Box component="span">{extra}</Box>
        </Box>
      </Box>
      <Box>
        <Button variant="contained" color="primary">
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default CalorieCalculator;
