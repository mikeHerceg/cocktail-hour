// Generated with util/create-component.js

import React,{ useEffect, useState } from "react";
import styles from "./theme-toggle.module.scss";
import ToggleButton from "../toggle-button";


const ThemeToggle = ({ ...props }) => {
  
  const [isLightTheme, setIsLightTheme] = useState(true); 
  
  function setTheme(){
    setIsLightTheme(!isLightTheme);
  }

  useEffect(()=>{
    const rootElement = document.getElementById('root');
    if (isLightTheme){
      rootElement.dataset.theme = 'light';
    }else{
      rootElement.dataset.theme = 'dark';
    }
  },[isLightTheme]);

  return (
    <div data-testid="theme-toggle" className={styles['theme-toggle']}>
      <span className={styles.text}>
        Toggle to {!isLightTheme? 'light':'dark'} theme :
      </span> 
      <ToggleButton onClick={setTheme} value={isLightTheme}/>
    </div>
  ); 
};

export default ThemeToggle;
