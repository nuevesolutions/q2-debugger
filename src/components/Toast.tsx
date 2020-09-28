import React, { FC, ReactNode } from 'react';
import Box from './Box';
import useTheme from '../hooks/useTheme';

export interface ToastProps {
  style?: object;
  backgroundColor?: string;
  color?: string;
}

export const styles = {
  toast: {
    visibility: 'visible',
    minWidth: '200px',
    marginLeft: '-125px',
    textAlign: 'center',
    borderRadius: '2px',
    padding: '5px',
    position: 'fixed',
    left: '50%',
    bottom: '30px',
    fontSize: '17px'
  }
};

const Toast: FC<ToastProps> = (props: ToastProps) => {
  const { style } = props;
  const theme = useTheme();
  return (
    <Box
      backgroundColor={theme?.backgroundColor}
      color={theme?.color}
      style={{
        ...styles.toast,
        ...style
      }}
    >
      Copied to clipboard !!
    </Box>
  );
};

Toast.defaultProps = {};

export default Toast;
