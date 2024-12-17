export default function Main() {
  return (
    <main className="main-styling">
      <form className="form-styling">
        <input
          className="input-styling"
          type="text"
          placeholder="e.g. Oregano"
        />
        <button 
          className="ingredient-button"
        >
          + Add Ingredient
        </button>
      </form>
    </main>
  )
}