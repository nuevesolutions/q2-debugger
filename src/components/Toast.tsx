import React, { FC, ReactNode } from 'react';




export interface ToastProps {
    // active?: boolean;
    // ariaLabel?: string;
    // badge?: boolean;
    // children?: ReactNode;
    // class?: string;
    // color?: string;
    // disabled?: boolean;
    // icon?: boolean;
    // className?: string;
    // style?: object;
    // block?: boolean;
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
      padding: '10px',
      position: 'fixed',
      left: '50%',
      bottom: '30px',
      fontSize: '17px'
    }
  };
  

const Toast:FC<ToastProps> = (props:ToastProps) => {
    const {style} = props;
  return (
    <div
      style={{
        ...styles.toast
        ...style
      }}
    >
      copied to clipboard !!
    </div>
  );
};

Toast.defaultProps = {
   
  };
  

export default Toast;
