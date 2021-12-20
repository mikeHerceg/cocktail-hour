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
//look for strIngredient, strMeasure
function findValueByPrefix(object, prefix) {
    const array = new Array;
    for (var property in object) {
      if (object.hasOwnProperty && 
         property.toString().startsWith(prefix)) {
          array.push(object[property]);
      }
    }
    return array.filter(item => 
        item !== null | undefined | ''
    );
  }

  function buildIngredientList(){
    const ingredients = findValueByPrefix(currentDrink, 'strIngredient');
    const amounts = findValueByPrefix(currentDrink, 'strMeasure');
    if (ingredients.length !== amounts.length) return ingredients;
    return ingredients.map((ingredient, index)=>{
        return amounts[index]+ ' '+ingredient;
    });
  }
    
    const [currentDrinkIngredients, setCurrentDrinkIngredients ] = useState([]);
    
    useEffect(()=>{
        //console.log(buildIngredientList());
        setCurrentDrinkIngredients(
            buildIngredientList()
        );
    },[currentDrink]);


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
                <p><b>Ingredients:</b></p> 
                <ul>
                    {
                        currentDrinkIngredients.map(ingredient =>{
                            if(!ingredient || ingredient === ' ') return null;
                            return <li key={ingredient}>{ingredient}</li>;
                        })
                    }
                </ul>

                <p><b>Instructions:</b> {currentDrink.strInstructions}</p>
            </div>
        :null
        }
        </div>
    );
};
export default Home;