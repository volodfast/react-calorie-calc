import { Container } from '@material-ui/core';
// containers
import CalorieCalculator from 'modules/calorie/containers/CalorieCalculator';

function App() {
  return (
    <Container maxWidth="sm">
      <CalorieCalculator />
    </Container>
  );
}

export default App;
