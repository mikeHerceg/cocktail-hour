import React, { useState, useEffect, useRef } from "react";
import DrinkCard from "../components/drink-card";
import DrinkInfo from "../components/drink-info";
import Slideout from "../components/Slideout";
const MyDrinks = () => {
  const [myDrinks, setMyDrinks] = useState([]);
  const slideOutRef = useRef();

  function getMyDrinks() {
    const storedDrinks = JSON.parse(localStorage.getItem("myDrinks"));
    setMyDrinks(storedDrinks);
  }
    useEffect(()=>{
        getMyDrinks();
    },[localStorage.getItem("myDrinks")]);


  return (
    <>
    <div className="container main-content">
      
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
</>
  );
};
export default MyDrinks;
