import React, { FC, ReactNode } from 'react';
import Box from './Box';

export interface ToastProps {
  style?: object;
}

export const styles = {
  toast: {
    visibility: 'visible',
    minWidth: '200px',
    marginLeft: '-125px',
    backgroundColor: '#333',
    color: '#fff',
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
  return (
    <Box
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
