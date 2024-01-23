import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [name, setName] = useState("")
  const [pepperoni, setPepperoni] = useState(false)
  const [mushrooms, setMushrooms] = useState(false)
  const [olives, setOlives] = useState(false)
  return (
    <div className="App">
      <form>
      <header>Pizza Order</header>
        <label>
          Name:
          <input className="Name-field"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          <input
            type="checkbox"
            checked={pepperoni}
            onChange={() => setPepperoni(!pepperoni)}
          />
          Pepperoni
        </label>

        <label>
          <input
            type="checkbox"
            checked={mushrooms}
            onChange={() => setMushrooms(!mushrooms)}
          />
          Mushrooms
        </label>

        <label>
          <input
            type="checkbox"
            checked={olives}
            onChange={() => setOlives(!olives)}
          />
          Olives
        </label>
        <button type="submit">Order Now</button>
      </form>

      <div className="summary">
        <h2>Order Summary</h2>
        <p>Name: {name}</p>
        {pepperoni && <p>Pepperoni</p>}
        {mushrooms && <p>Mushrooms</p>}
        {olives && <p>Olives</p>}
      </div>
    </div>
  );
}

export default App;
