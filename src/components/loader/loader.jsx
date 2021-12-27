// Generated with util/create-component.js

import React,{ useState, useEffect } from "react";
import PropTypes from "prop-types"; 
import styles from "./loader.module.scss";


const Loader = ({ 
  ...props
}) => {
  const [dots, setDots] = useState('');

  useEffect(()=>{
    setTimeout(()=>{
      setDots(dots+'.');
    },1000);
  },[dots]);
  

  return (
    <div data-testid="loader" className={styles['loader']}>
      loading{dots}
    </div>
  ); 
};

export default Loader;

Loader.propTypes = {
  //add Proptypes here
};
Loader.defaultProps = {
  //add defualt values
};
