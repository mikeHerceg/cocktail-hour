// Generated with util/create-component.js

import React from "react";
import { Link } from 'react-router-dom';
import styles from "./navigation.module.scss";


const Navigation = () => {
  return (
    <div data-testid="navigation" className={styles['navigation']}>
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
    </div>
  ); 
};

export default Navigation;
