// Generated with util/create-component.js

import React, { useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import styles from "./navigation.module.scss";
import ThemeToggle from "../theme-toggle/theme-toggle";


const Navigation = () => {
  
  const navRef = useRef();
  const navSpacerRef = useRef();

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
          {/*<Link to="/my-drinks">
            My Drinks
          </Link>
  */}
        </li>
      </ul>
      <ThemeToggle/>
    </div>
    <div ref={navSpacerRef} className="navigation-spacer"></div>
    </>
  ); 
};

export default Navigation;
