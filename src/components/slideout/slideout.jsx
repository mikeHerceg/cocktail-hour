// Generated with util/create-component.js

import React, { forwardRef, useImperativeHandle, useState } from "react";
import styles from "./slideout.module.scss";
import Button from "../button";

const Slideout = ({ 
  children,
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
