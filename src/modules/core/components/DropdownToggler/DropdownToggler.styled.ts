import { makeStyles } from '@material-ui/core';

export const useDropdownTogglerStyles = makeStyles({
  container: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  iconOpened: {
    transform: 'rotate(180deg)',
  },
  iconClosed: {
    transform: 'rotate(0deg)',
  },
});
