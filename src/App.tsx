import { Container } from '@material-ui/core';
// containers
import MealCalorieCalculator from 'modules/meal/containers/MealCalorieCalculator';

function App() {
  return (
    <Container maxWidth="sm">
      <MealCalorieCalculator />
    </Container>
  );
}

export default App;
