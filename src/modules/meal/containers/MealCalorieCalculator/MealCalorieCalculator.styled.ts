import { makeStyles } from '@material-ui/core';

export const useMealCalorieCalculatorStyles = makeStyles({
  container: {},
  title: {},
  totalCalorie: {},
  productList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  productWrapper: { flex: 1, padding: 10 },
  controls: {
    textAlign: 'center',
  },
});
