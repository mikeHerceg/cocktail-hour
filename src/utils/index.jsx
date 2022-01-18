/**
 * returns promise with drink details from api
 */
export const getDrinkDetails = (drinkId) => {
     //todo show ingredients for drink
     return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
               .then(response => response.json())
               .then(data=>data.drinks[0]);
};