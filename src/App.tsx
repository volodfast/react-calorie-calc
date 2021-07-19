import { Container } from '@material-ui/core';
// containers
import CalorieCalculator from 'modules/calorie/containers/CalorieCalculator';
import MealCalorieCalculator from 'modules/meal/containers/MealCalorieCalculator';

function App() {
  return (
    <Container maxWidth="sm">
      <CalorieCalculator />
      <MealCalorieCalculator />
    </Container>
  );
}

export default App;
