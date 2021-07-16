import React, { FC } from 'react';
import { Box, Paper, TextField } from '@material-ui/core';

const AddProductForm: FC = () => {
  return (
    <Paper>
      <form>
        <Box>Add product</Box>
        <TextField id="title" label="Title" />
      </form>
    </Paper>
  );
};

export default AddProductForm;
