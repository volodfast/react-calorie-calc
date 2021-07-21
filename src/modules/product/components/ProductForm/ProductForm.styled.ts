import { makeStyles } from '@material-ui/core';

export const useProductFromStyles = makeStyles({
  container: {
    position: 'relative',
    border: '1px solid black',
    borderRadius: 10,
    textAlign: 'center',
    padding: '10px 20px 15px',
    width: '100%',
    minWidth: 200,
  },
  closeIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'inline-block',
    padding: '5px',
    cursor: 'pointer',
    transition: 'color 0.2s ease-out',
    '&:hover': {
      color: 'red',
    },
  },
  title: {
    margin: '0 0 10px',
    padding: '0 25px',
  },
  input: {
    marginBottom: 20,
    width: '100%',
  },
  overallInfo: {},
  totalCalories: {
    fontWeight: 'bold',
  },
});
