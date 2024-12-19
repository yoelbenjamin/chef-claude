import { useState } from "react";



export default function Jokes() {

  const jokes = [
    {
      setup: "What is the capital of France?",
      punchline: "Paris"
    },
    {
      setup: "What is the capital of Japan?",
      punchline: "Tokyo"
    }
  ]

  const [jokeDisplay, setJokeDisplay] = useState(false);

  console.log (jokes);

  return (
    <div>
      {jokes[0].setup && <h3>{jokes[0].setup}</h3>}
      <p>{jokes[0].punchline}</p>
      <hr />
    </div>
  )
}
