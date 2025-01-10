import { useState } from "react";
import React from "react";





export default function ingredientsList(props) {
  function displayIngredientsList(props) {
    return props.ingredientsList.map((ingredient) => (
      <li key={ingredient}>{ingredient}</li>
    ))
  }
  return (
    <>
      <div className="ingredients-list-styling">
        {props.ingredientsList.length > 0 && <h1>Ingredients on hand:</h1>}
        <ul>
          {displayIngredientsList(props)}
        </ul>
      </div>

      {
        props.ingredientsList.length > 2 && <div className="get-recipe-card">
          <div className="get-recipe-card-text">
            <h3>Ready for a recipe?</h3>
            <p className="get-recipe-card-text-p">Generate a recipe based on your ingredients</p>
          </div>
          <button onClick={props.handleGetRecipe} className="get-recipe-button">Get Recipe</button>
        </div>
      }
    </>
  )
}