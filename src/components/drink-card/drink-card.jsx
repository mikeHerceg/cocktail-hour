// Generated with util/create-component.js

import React, { useEffect, useState, useMemo, useRef } from "react";
import Toaster from '../toaster';
import styles from "./drink-card.module.scss";
import Button from "../button";
import { Link } from "react-router-dom";

const DrinkCard = ({ 
  item,
  emitEvent
}) => {
  const [isMyDrinks, setMyDrinks] = useState();
  const toasterRef = useRef();
  
  const storedDrinks = useMemo(()=>{
    const storedDrinks = JSON.parse(localStorage.getItem('myDrinks'));
    if( !storedDrinks) return [];
    return storedDrinks;
  },[localStorage.getItem('myDrinks')]);

  async function addDrink(drink){ 
    let myDrinks = [];
    if(storedDrinks){
        myDrinks = storedDrinks;
    }
    myDrinks.push(drink);
    await localStorage.setItem('myDrinks',JSON.stringify(myDrinks)); 
    setMyDrinks(true); 
    toasterRef.current.openToaster(()=><>drink has been saved to <Link to="/my-drinks">My Drinks</Link></>);
  }
  async function removeDrink(drink){ 
    let myDrinks = [];
    if(storedDrinks){
        myDrinks = storedDrinks;
    }
    const drinkId = drink.idDrink;
    myDrinks = myDrinks.filter(drink=>{
      return drink['idDrink'] !== drinkId;
    });
    await localStorage.setItem('myDrinks',JSON.stringify(myDrinks)); 
    setMyDrinks(false);
    toasterRef.current.openToaster(()=><>drink has been removed to <Link to="/my-drinks">My Drinks</Link></>);
  }
  

  function checkMyDrinks(drinkId){
    const myDrinks = storedDrinks;
    myDrinks.map(drink=>{
      if(drink['idDrink'] === drinkId ){
        setMyDrinks(true);
      }
    });
  }
  useEffect(()=>{
    checkMyDrinks(item.idDrink);
  },[]);
  return (
    <div data-testid="drink-card" className={styles['drink-card']} key={item.idDrink}>
        <img src={item.strDrinkThumb} alt={`image of ${item.strDrink}`}/>
        <h4>{item.strDrink}</h4>
        <div className={styles['button-group']}>  
          {
            isMyDrinks ?
              <Button onClick={()=>{removeDrink(item);}}>Saved</Button>
            :
              <Button onClick={()=>{addDrink(item);}}>Save</Button>
          }
          <Button onClick={()=>{emitEvent(item.idDrink);}}>Details</Button>
        </div>
        <Toaster ref={toasterRef} success/>
    </div>

  ); 
};

export default DrinkCard;