import React, { useState, useEffect, useRef } from 'react';
import DrinkCard from '../components/drink-card';
import { drinkOptions } from '../assets/drinkOptions.array';
import DrinkInfo from '../components/drink-info/drink-info';
import Slideout from '../components/slideout/slideout';
import DropDown from '../components/drop-down/drop-down';
//https://www.thecocktaildb.com/api.php
const Home = () =>{
    const [currentDrink, setCurrentDrink] = useState();
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
       <>
       <div className="container main-content">
            <DropDown 
                label="I Like to Drink" 
                options={drinkOptions} 
                defaultValue={liquorChoice}
                emitValue={setLiquorChoice}/>

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
            {currentDrink &&
                <DrinkInfo drink={currentDrink}/>
            }
        </Slideout>
        </>
    );
};
export default Home;