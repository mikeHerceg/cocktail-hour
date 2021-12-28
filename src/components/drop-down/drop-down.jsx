// Generated with util/create-component.js

import React, { useEffect, useState } from "react";
import styles from "./drop-down.module.scss";


const DropDown = ({ 
  label,
  options = [],
  defaultValue,
  emitValue,
  placeholderOption,
  ...props
}) => {

  const [value, setValue] = useState(placeholderOption ? '1' : defaultValue);

  useEffect(()=>{
    emitValue(value);
  },[value]);

  return (
    <div data-testid="drop-down" className={styles['drop-down']}>
        <label>{label}</label>
        <select value={value} onChange={(e)=>setValue(e.target.value)}>
          {placeholderOption && <option value={'1'} disabled>{placeholderOption}</option>}
          {
            options.map(option=>{
              return <option key={option.value} value={option.value}>{option.label}</option>;
            })
          }
        </select>
    </div>
  ); 
};

export default DropDown;

DropDown.propTypes = {
  //add Proptypes here
};

