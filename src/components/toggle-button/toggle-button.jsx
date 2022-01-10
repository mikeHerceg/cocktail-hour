// Generated with util/create-component.js

import React, { useState } from "react";
import styles from "./toggle-button.module.scss";


const ToggleButton = ({ 
  value,
  onClick,
}) => {

  const [isTrue, setIsTrue] = useState(value);

  return (
    <div 
      data-testid="toggle-button" 
      className={[styles['toggle-button'], isTrue?styles.on:styles.off].join(' ')}
      onClick={()=>{setIsTrue(!isTrue),onClick();}}
    >
      <span className={styles.background}></span>
      <span className={styles.button}></span>
    </div>
  ); 
};

export default ToggleButton;
