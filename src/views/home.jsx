import React, { useState, useRef, useEffect } from 'react';
//https://www.thecocktaildb.com/api.php
const Home = ({
    ...props
}) =>{

    const [drinks, setDrinks] = useState([]);
    const [liquorChoice, setLiquorChoice] = useState([]);
    
    function getDrinks(liquor){
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${liquor}`)
        .then(response => response.json())
        .then(data=>setDrinks(data));  
    }
    
    useEffect(async ()=>{
        getDrinks(liquorChoice);
    },[liquorChoice]);
   


    return(

        <div>
            <h1>Cocktail Hour!</h1>
            <label className>I Like to Drink</label>
            <select onChange={(e)=>setLiquorChoice(e.target.value)}>
                <option value="vodka">Vodka</option>
                <option value="gin">Gin</option>
                <option value="whiskey">Whiskey</option>
                <option value="burbon">Burbon</option>
            </select>
        </div>
    );
};
export default Home;