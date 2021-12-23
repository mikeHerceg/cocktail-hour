// Generated with util/create-component.js

import React, { useRef, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import styles from "./navigation.module.scss";
import ToggleButton from "../toggle-button/toggle-button";


const Navigation = () => {
  
  const navRef = useRef();
  const navSpacerRef = useRef();
  const [isLightTheme, setIsLightTheme] = useState(true); 

  function setTheme(){
    setIsLightTheme(!isLightTheme);
  }

  useEffect(()=>{
    console.log(isLightTheme);
    const rootElement = document.getElementById('root');
    if (isLightTheme){
      rootElement.dataset.theme = 'light';
    }else{
      rootElement.dataset.theme = 'dark';
    }
  },[isLightTheme]);


  useEffect(()=>{
    navSpacerRef.current.style=`height: ${navRef.current.clientHeight+40}px;`;
  },[navRef] );

  return (
    <>
    <div ref={navRef} data-testid="navigation" className={styles['navigation']}>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/my-drinks">
            My Drinks
          </Link>
        </li>
      </ul>
      <ToggleButton onClick={setTheme} value={isLightTheme}/>
    </div>
    <div ref={navSpacerRef} className="navigation-spacer"></div>
    </>
  ); 
};

export default Navigation;
