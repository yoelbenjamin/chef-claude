import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Main from './components/Main'
function App() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

  return (
    <>
      <Header />
      <Main />

      <main className="main-styling">
        <h1>How many times did dave say state? </h1>
        <div className="counter-styling">
          <button className="counter-button" onClick={handleIncrement}>+</button>
          <h2 className="counter-number">{count}</h2>
          <button className="counter-button" onClick={handleDecrement}>-</button> 
        </div>
      </main>
    </>
  )
}

export default App
