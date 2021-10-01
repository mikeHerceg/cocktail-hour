import React, { useState, useEffect } from "react";
import DrinkCard from "../components/drink-card";
const MyDrinks = () => {
  const [myDrinks, setMyDrinks] = useState([]);

  function getMyDrinks() {
    const storedDrinks = JSON.parse(localStorage.getItem("myDrinks"));
    setMyDrinks(storedDrinks);
  }
    useEffect(()=>{
        getMyDrinks();
    },[localStorage.getItem("myDrinks")]);

  return (
    <div className="container main-content">
      <div className="row">
        
        {myDrinks.length > 0 ?
            myDrinks.map(item => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={item.idDrink}>
              <DrinkCard item={item} />
            </div>
          );
        })
        : 'no drinks saved!'
    }
      </div>
    </div>
  );
};
export default MyDrinks;
