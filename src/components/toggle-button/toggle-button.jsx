// Generated with util/create-component.js

import React, { useState } from "react";
import PropTypes from "prop-types"; 
import styles from "./toggle-button.module.scss";


const ToggleButton = ({ 
  value,
  onClick,
  ...props
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

ToggleButton.propTypes = {
  //add Proptypes here
};
ToggleButton.defaultProps = {
  //add defualt values
};
