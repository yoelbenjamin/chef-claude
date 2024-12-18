import { useState } from 'react'

export default function Main() {

  const [ingredientsList, setIngredientsList] = useState([]);


  function handleAddIngredient (event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredientsList( prevIngredients => [...prevIngredients, newIngredient]);
  }

  return (
    <main className="main-styling">
      <form 
        onSubmit={handleAddIngredient}
        className="form-styling">
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
        <ul>
          {ingredientsList.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </main>
  )
}