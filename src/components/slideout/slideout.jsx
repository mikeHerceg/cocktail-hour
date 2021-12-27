// Generated with util/create-component.js

import React, { forwardRef, useImperativeHandle, useState } from "react";
import PropTypes from "prop-types"; 
import styles from "./slideout.module.scss";
import Button from "../button";

const Slideout = ({ 
  children,
  ...props
}, ref) => {

  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref,()=>({
    toggleSlide:()=>{
      setIsOpen(!isOpen);
    },
    openSlide:()=>{
      setIsOpen(true);
    },
    closeSlide:()=>{
      setIsOpen(false);
    }
  }));

  return (
    <div data-testid="slideout" data-open={isOpen} className={styles['slideout']}>
       <Button onClick={()=>setIsOpen(!isOpen)}>X</Button>
      {children}
    </div>
  ); 
};

export default forwardRef(Slideout);

Slideout.propTypes = {
  //add Proptypes here
};
Slideout.defaultProps = {
  //add defualt values
};
