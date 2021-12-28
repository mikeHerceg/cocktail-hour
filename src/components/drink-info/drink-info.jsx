// Generated with util/create-component.js

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; 
import styles from "./drink-info.module.scss";
import Button from '../../components/button';


const DrinkInfo = ({ 
  drink,
  ...props
}) => {

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
  const ingredients = findValueByPrefix(drink, 'strIngredient');
  const amounts = findValueByPrefix(drink, 'strMeasure');
  if (ingredients.length !== amounts.length) return ingredients;
  return ingredients.map((ingredient, index)=>{
      return amounts[index]+ ' '+ingredient;
  });
}
  
  const [drinkIngredients, setDrinkIngredients ] = useState([]);
  
  useEffect(()=>{
      setDrinkIngredients(
          buildIngredientList()
      );
  },[drink]);
  return (

    <div data-testid="drink-info" className={styles['drink-info']}>
                <h1>{drink.strDrink}</h1>
                <img width="100px" height="100px"src={drink.strDrinkThumb} alt={`image of ${drink.strDrink}`}/>
                <p><b>Glass Type:</b> {drink.strGlass}</p>
                <p><b>Ingredients:</b></p> 
                <ul>
                    {
                        drinkIngredients.map(ingredient =>{
                            if(!ingredient || ingredient === ' ') return null;
                            return <li key={ingredient}>{ingredient}</li>;
                        })
                    }
                </ul>

                <p><b>Instructions:</b> {drink.strInstructions}</p>
    </div>
  ); 
};

export default DrinkInfo;

DrinkInfo.propTypes = {
  //add Proptypes here
};
DrinkInfo.defaultProps = {
  //add defualt values
};
