import React, { useState, useEffect } from 'react';
import DrinkCard from '../components/drink-card';
//https://www.thecocktaildb.com/api.php
const Home = () =>{
    const [showIngredients, setShowIngredients] = useState(false);
    const [currentDrink, setCurrentDrink] = useState(false);
    const [drinks, setDrinks] = useState([]);
    const [liquorChoice, setLiquorChoice] = useState('l');
    
    function getDrinks(liquor){
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${liquor}`)
        .then(response => response.json())
        .then(data=>{setDrinks(data.drinks);});  
        setShowIngredients(false);
    }
    
    function showDetails(drinkId){
        //todo show ingredients for drink
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
        .then(response => response.json())
        .then(data=>{setCurrentDrink(data.drinks[0]);});  
        setShowIngredients(true);
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
        {showIngredients ?
            <div className="sidebar-info">
                <button onClick={()=>setShowIngredients(!showIngredients)}>X</button>
                <h1>{currentDrink.strDrink}</h1>
                <img width="100px" height="100px"src={currentDrink.strDrinkThumb} alt={`image of ${currentDrink.strDrink}`}/>
                <p><b>Glass Type:</b> {currentDrink.strGlass}</p>
                <p><b>Ingredients:</b> 
                <ul>
                    <li>{currentDrink.strIngredient1}</li>
                    <li>{currentDrink.strIngredient2}</li>
                    <li>{currentDrink.strIngredient3}</li>
                    <li>{currentDrink.strIngredient4}</li>
                    <li>{currentDrink.strIngredient5}</li>
                    <li>{currentDrink.strIngredient6}</li>
                    <li>...</li>
                </ul>
                </p>
                <p><b>Instructions:</b> {currentDrink.strInstructions}</p>
            </div>
        :null
        }
        </div>
    );
};
export default Home;