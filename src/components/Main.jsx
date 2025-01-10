import { useState } from 'react'
import ClaudeRecipe from './ClaudeRecipe';
import { GenerateRecipe } from './ai';
import IngredientsList from './IngredientsList';



export default function Main() {
  const [loading, setLoading] = useState(false);

  const [ingredientsList, setIngredientsList] = useState([]);
 
  const [recipe, setRecipe] = useState('');
  
  function handleAddIngredient(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredientsList(prevIngredients => [...prevIngredients, newIngredient]);
    event.currentTarget.reset();
  }

  async function handleGetRecipe() {
    setLoading(true);

    setRecipe(await GenerateRecipe(ingredientsList));

    setLoading(false);
    console.log('recipe:', recipe);
  }


  return (
    <main className="main-styling">
      <section className="content-styling">
        <h1>Add 3 Ingredients</h1>
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

      <IngredientsList setIngredientsList={setIngredientsList} ingredientsList={ingredientsList} handleGetRecipe={handleGetRecipe} />

      {loading && 
      <p>Grabbing a recipe for you...</p>}
      <ClaudeRecipe recipe={recipe}/>

      </section>
    </main>
  )
}
