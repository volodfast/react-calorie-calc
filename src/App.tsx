import { Box, Container } from '@material-ui/core';
// containers
import MealCalorieCalculator from 'modules/meal/containers/MealCalorieCalculator';

function App() {
  return (
    <Container maxWidth="xl">
      <Box
        style={{
          maxWidth: 600,
          margin: '0 auto',
        }}
      >
        <MealCalorieCalculator />
      </Box>
    </Container>
  );
}

export default App;
