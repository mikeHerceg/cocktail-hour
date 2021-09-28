import React, { useState, useRef, useEffect } from 'react';
//https://www.thecocktaildb.com/api.php
const Home = ({
    ...props
}) =>{
    const [showIngredients, setShowIngredients] = useState(false);
    const [currentDrink, setCurrentDrink] = useState(false);
    const [drinks, setDrinks] = useState([]);
    const [liquorChoice, setLiquorChoice] = useState('l');
    
    function getDrinks(liquor){
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${liquor}`)
        .then(response => response.json())
        .then(data=>{setDrinks(data.drinks);});  
    }
    function addDrink(drink){ 
        let myDrinks = [];
        let storedDrinks = JSON.parse(localStorage.getItem('myDrinks'));
        if(storedDrinks){
            myDrinks = storedDrinks;
        }
        myDrinks.push(drink);
        localStorage.setItem('myDrinks',JSON.stringify(myDrinks));  
    }
    function showDetails(drinkId){
        //todo show ingredients for drink
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
        .then(response => response.json())
        .then(data=>{console.log(data.drinks[0]),setCurrentDrink(data.drinks[0]);});  
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
                        <img width="200px" height="200px"src={item.strDrinkThumb} alt={`image of ${item.strDrink}`}/>
                        <h4>{item.strDrink}</h4>
                        <button onClick={()=>{addDrink(item);}}>Add to my drinks</button>
                        <button onClick={()=>{showDetails(item.idDrink);}}>Show details</button>
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