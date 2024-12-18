export default function FormWork() {

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);

    event.currentTarget.reset();
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
        <button className="button-styling" type="submit">Sign in</button>
      </form>
    </section>
  )
}