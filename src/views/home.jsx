import React, { useState, useEffect, useRef } from 'react';
import DrinkCard from '../components/drink-card';

import DrinkInfo from '../components/drink-info/drink-info';
import Slideout from '../components/slideout/slideout';
//https://www.thecocktaildb.com/api.php
const Home = () =>{
    const [currentDrink, setCurrentDrink] = useState(false);
    const [drinks, setDrinks] = useState([]);
    const [liquorChoice, setLiquorChoice] = useState('vodka');
    const slideOutRef = useRef();

    function getDrinks(liquor){
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${liquor}`)
        .then(response => response.json())
        .then(data=>{setDrinks(data.drinks);});        
        slideOutRef.current.closeSlide();
    }
    
    function showDetails(drinkId){
        //todo show ingredients for drink
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
        .then(response => response.json())
        .then(data=>{setCurrentDrink(data.drinks[0]);})
        .then(slideOutRef.current.openSlide());  
    }

    useEffect(()=>{
        getDrinks(liquorChoice);
    },[liquorChoice]);




    return(
       <div className="d-flex">
       <div className="container main-content">
            <h1>Cocktail Hour!</h1>
            <label>I Like to Drink</label>
            <select value={liquorChoice} onChange={(e)=>setLiquorChoice(e.target.value)}>
                <option value='l' disabled>Liquor</option>
                <option value="vodka">Vodka</option>
                <option value="gin">Gin</option>
                <option value="whiskey">Whiskey</option>
                <option value="bourbon">Bourbon</option>
                <option value="tequila">Tequila</option>
                <option value="rum">Rum</option>
                <option value="bitters">Bitters</option>
            </select>
            <div className="row">
            {
                drinks.map(item=>{
                  return( 
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={item.idDrink}>
                      <DrinkCard item={item} emitEvent={showDetails}/>
                    </div>
                  );
                })
            }
            </div>
        </div>
        <Slideout ref={slideOutRef}>
            <DrinkInfo drink={currentDrink}/>
        </Slideout>
        </div>
    );
};
export default Home;