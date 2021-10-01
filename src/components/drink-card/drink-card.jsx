// Generated with util/create-component.js

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"; 
import styles from "./drink-card.module.scss";


const DrinkCard = ({ 
  item,
  emitEvent
}) => {
  
  function addDrink(drink){ 
    let myDrinks = [];
    let storedDrinks = JSON.parse(localStorage.getItem('myDrinks'));
    if(storedDrinks){
        myDrinks = storedDrinks;
    }
    myDrinks.push(drink);
    localStorage.setItem('myDrinks',JSON.stringify(myDrinks));  
  }
  function removeDrink(drink){ 
    let myDrinks = [];
    let storedDrinks = JSON.parse(localStorage.getItem('myDrinks'));
    if(storedDrinks){
        myDrinks = storedDrinks;
    }
    const drinkId = drink.idDrink;
    myDrinks = myDrinks.filter(drink=>{
      return drink['idDrink'] !== drinkId;
    });
    console.log(myDrinks);
    localStorage.setItem('myDrinks',JSON.stringify(myDrinks));  
  }
  const [isMyDrinks, setMyDrinks] = useState(false);

  function checkMyDrinks(drinkId){
    const myDrinks = JSON.parse(localStorage.getItem('myDrinks'));
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
     
        <img width="200px" height="200px"src={item.strDrinkThumb} alt={`image of ${item.strDrink}`}/>
        <h4>{item.strDrink}</h4>
        {
          isMyDrinks ?
            <button onClick={()=>{removeDrink(item);}}> Remove from my drinks</button>
          :
            <button onClick={()=>{addDrink(item);}}>Add to my drinks</button>
        }
        <button onClick={()=>{emitEvent(item.idDrink);}}>Show details</button>
   
    </div>
  ); 
};

export default DrinkCard;

DrinkCard.propTypes = {
  //add Proptypes here
};
DrinkCard.defaultProps = {
  //add defualt values
};