// Generated with util/create-component.js

import React, { forwardRef, useImperativeHandle, useEffect, useState, useMemo } from "react";
import styles from "./toaster.module.scss";

const Toaster = ({ 
  ...props
}, ref) => {
  
  const [ isPresent, setIsPresent ] = useState(false);
  const [ text, setText ] = useState();

  useImperativeHandle(ref,()=>({
      openToaster:(text)=>{
        setText(text);
        setIsPresent(true);
        setTimeout(removeComponent, 3000 );
      }
    })
  );
  function removeComponent(){
    setIsPresent(false);
  }
  function cleanUp(){
    clearTimeout(removeComponent);
  }

  function evaluateType(){
    if(props.success) return 'success';
    if(props.warning) return 'warning';
    if(props.danger) return 'danger';
  }
  const type = useMemo(evaluateType,[props]);

  useEffect(()=>{
    return cleanUp();
  },[]);
  
  if (!isPresent) return null;

  return (
    <div data-testid="toaster" className={styles['toaster']} data-type={type}>
      {text}  <span onClick={removeComponent}>x</span>
    </div>
  ); 
};

export default forwardRef(Toaster);