export default function FormWork() {

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const description = formData.get("textarea");
    const checkbox = formData.getAll("checkbox");
    const radio = formData.get("radio");
    const select = formData.get("select");
    console.log(email, password, description, checkbox, radio);
  }

  return (
    <section className="form-work-styling">
      <h1>Sign up here</h1>
      <form
        onSubmit={handleSubmit}
        className="form-form-styling"
        method="POST"
      >
        <label htmlFor="email">Email</label>
        <input className="input-styling" type="email" name="email" placeholder="Enter email" />
        <label htmlFor="password">Password</label>
        <input className="input-styling" type="password" name="password" placeholder="Enter password" />

        <label htmlFor="textarea">Description</label>
        <textarea name="textarea" placeholder="Enter text here"></textarea>

        <fieldset>

          <legend>Radio Buttons</legend>

          <label htmlFor="option1">
            <input type="radio" name="radio" value="option1" id="option1" />
            Radio</label>

          <label htmlFor="option2">
            <input type="radio" name="radio" value="option2" id="option2" />
            Radio</label>

          <label htmlFor="option3">
            <input type="radio" name="radio" value="option3" id="option3" />
            Radio</label>

        </fieldset>

        <fieldset>

          <legend>Checkbox Buttons</legend>

          <label htmlFor="kosher">
            <input type="checkbox" name="checkbox" value="kosher" id="kosher" />
            Kosher</label>

          <label htmlFor="vegan">
            <input type="checkbox" name="checkbox" value="vegan" id="vegan" />
            Vegan</label>

          <label htmlFor="Meat">
            <input type="checkbox" name="checkbox" value="Meat" id="Meat" />
            Meat</label>

        </fieldset>


        <label htmlFor="select">Select</label>
        <select name="select" id="select">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        <button className="button-styling" type="submit">Sign in</button>
      </form>
    </section>
  )
}