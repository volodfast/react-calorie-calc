import { FC } from 'react';
import { Box } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// interfaces
import { DropdownTogglerProps } from './DropdownToggler.interface';

const DropdownToggler: FC<DropdownTogglerProps> = ({ isOpen, onClick }) => {
  const iconStyles: React.CSSProperties = {
    transform: `rotate(${isOpen ? '180' : '0'}deg)`,
  };

  return (
    <Box display={'inline-block'} style={iconStyles} onClick={onClick}>
      <KeyboardArrowDownIcon />
    </Box>
  );
};

export default DropdownToggler;
