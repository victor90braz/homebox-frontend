import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () =>
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={increment}>+</button>
        <p>{count}</p>
        <button onClick={decrement}>-</button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <main>
        <Home name="HomeBox" />
      </main>
    </div>
  );
}

export default App;
