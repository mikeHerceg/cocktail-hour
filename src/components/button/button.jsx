// Generated with util/create-component.js

import React from "react"; 
import styles from "./button.module.scss";


const Button = ({ 
  onClick,
  className,
  ...props
}) => {

  return (
    <button 
      data-testid="button" 
      className={styles['button']}
      onClick={onClick}
      >
        { props.children } 
    </button>
  ); 
};

export default Button;

