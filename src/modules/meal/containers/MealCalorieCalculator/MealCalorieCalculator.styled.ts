import { makeStyles } from '@material-ui/core';

export const useMealCalorieCalculatorStyles = makeStyles({
  container: {},
  infoContainer: {
    textAlign: 'center',
    padding: '20px',
  },
  productListInfo: {
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'left',
  },
  productInfo: {
    fontSize: 24,
  },
  title: {},
  totalCalories: {
    fontSize: 28,
  },
  totalCaloriesText: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
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
