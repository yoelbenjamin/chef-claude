import { useState } from 'react'

export default function Main() {

  const [ingredientsList, setIngredientsList] = useState([]);
  const [recipeDisplay, setRecipeDisplay] = useState(false);

  
  function handleAddIngredient(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredientsList(prevIngredients => [...prevIngredients, newIngredient]);
    event.currentTarget.reset();
  }

  function displayIngredientsList() {
    return ingredientsList.map((ingredient) => (
      <li key={ingredient}>{ingredient}</li>
    ))
  }

  function handleGetRecipe() {
    setRecipeDisplay(prevRecipeDisplay => !prevRecipeDisplay);
  }

  return (
    <main className="main-styling">
      <section className="content-styling">
      <form
        onSubmit={handleAddIngredient}
        //action={handleAddIngredient}
        className="form-styling"
        method="POST"
      >
        <input
          className="input-styling"
          type="text"
          name="ingredient"
          placeholder="e.g. Oregano"
        />
        <button
          className="ingredient-button"
        >
          + Add Ingredient
        </button>
      </form>


      <div className="ingredients-list-styling">
      {ingredientsList.length > 0 && <h1>Ingredients on hand:</h1> }
        <ul>
          {displayIngredientsList()}
        </ul>
      </div>

      
      {ingredientsList.length > 3 && <div className="get-recipe-card">
        <div className="get-recipe-card-text">
          <h3>Ready for a recipe?</h3>
          <p className="get-recipe-card-text-p">Generate a recipe based on your ingredients</p>
        </div>
        <button onClick={handleGetRecipe} className="get-recipe-button">Get Recipe</button>
      </div>}

      {recipeDisplay && 
      <section className="recipe-display-styling">
        <h2>Recipe</h2>
      </section>}

      </section>
    </main>
  )
}