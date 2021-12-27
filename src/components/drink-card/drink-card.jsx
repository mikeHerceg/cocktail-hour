// Generated with util/create-component.js

import React, { useEffect, useState, useMemo } from "react";
import styles from "./drink-card.module.scss";
import Button from "../button";

const DrinkCard = ({ 
  item,
  emitEvent
}) => {
  const [isMyDrinks, setMyDrinks] = useState();

  const storedDrinks = useMemo(()=>{
    const storedDrinks = JSON.parse(localStorage.getItem('myDrinks'));
    if( !storedDrinks) return [];
    return storedDrinks;
  },[localStorage.getItem('myDrinks')]);

  function addDrink(drink){ 
    let myDrinks = [];
    if(storedDrinks){
        myDrinks = storedDrinks;
    }
    setMyDrinks(true);
    myDrinks.push(drink);
    localStorage.setItem('myDrinks',JSON.stringify(myDrinks));  
  }
  function removeDrink(drink){ 
    let myDrinks = [];
    if(storedDrinks){
        myDrinks = storedDrinks;
    }
    const drinkId = drink.idDrink;
    myDrinks = myDrinks.filter(drink=>{
      return drink['idDrink'] !== drinkId;
    });
    setMyDrinks(false);
    localStorage.setItem('myDrinks',JSON.stringify(myDrinks));  
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
          <Button onClick={()=>{emitEvent(item.idDrink);}}>Show details</Button>
        </div>
    </div>
  ); 
};

export default DrinkCard;