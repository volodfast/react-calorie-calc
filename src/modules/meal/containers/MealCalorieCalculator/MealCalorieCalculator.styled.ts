import { makeStyles } from '@material-ui/core';

export const useMealCalorieCalculatorStyles = makeStyles({
  container: {},
  title: {},
  totalCalorie: {},
  productListPlaceholder: {
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  },
  productWrapper: {
    flexBasis: 1,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controls: {
    textAlign: 'center',
    marginBottom: 10,
  },
});
