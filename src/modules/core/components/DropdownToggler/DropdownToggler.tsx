import { FC } from 'react';
import { Box } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// interfaces
import { DropdownTogglerProps } from './DropdownToggler.interface';
// styles
import { useDropdownTogglerStyles } from './DropdownToggler.styled';

const DropdownToggler: FC<DropdownTogglerProps> = ({ isOpen, onClick }) => {
  const classNames = useDropdownTogglerStyles();

  const containerClassnames = [
    classNames.container,
    isOpen ? classNames.iconOpened : classNames.iconClosed,
  ].join(' ');

  return (
    <Box
      display={'inline-block'}
      className={containerClassnames}
      onClick={onClick}
    >
      <KeyboardArrowDownIcon />
    </Box>
  );
};

export default DropdownToggler;
