import React, { useState, useEffect, useRef } from "react";
import DrinkCard from "../components/drink-card";
import DrinkInfo from '../components/drink-info/drink-info';
import Slideout from '../components/slideout/slideout';
import { getDrinkDetails } from '../utils';
const MyDrinks = () => {
  const [myDrinks, setMyDrinks] = useState([]);
  const [currentDrink, setCurrentDrink] = useState();
  const slideOutRef = useRef();
  function getMyDrinks() {
    const storedDrinks = JSON.parse(localStorage.getItem("myDrinks"));
    setMyDrinks(storedDrinks);
  }

  function showDetails(drinkId){
    getDrinkDetails(drinkId)
    .then(details =>setCurrentDrink(details))
    .then(slideOutRef.current.openSlide());  
  }

  useEffect(()=>{
      getMyDrinks();
  },[localStorage.getItem("myDrinks")]);

  return (
    <>
    <div className="container main-content">
      <div className="row">
          {myDrinks.length > 0 ?
            myDrinks.map(item => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={item.idDrink}>
              <DrinkCard item={item} emitEvent={showDetails}/>
            </div>
          );
          })
          : 'no drinks saved!'
          }
      </div>
    </div>
    <Slideout ref={slideOutRef}>
        {currentDrink &&
            <DrinkInfo drink={currentDrink}/>
        }
    </Slideout>
    </>
  );
};
export default MyDrinks;
