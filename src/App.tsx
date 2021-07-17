import { Container } from '@material-ui/core';
// containers
import CalorieCalculator from 'modules/calorie/containers/CalorieCalculator';
import AddProductForm from 'modules/product/containers/AddProductForm';

function App() {
  return (
    <Container maxWidth="sm">
      <AddProductForm />
      <CalorieCalculator />
    </Container>
  );
}

export default App;
