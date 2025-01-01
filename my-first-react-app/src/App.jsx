import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <>
        <h1> Rendering list elements: animals </h1>

        <List animals={animals} />
      </>
    </>
  );
}

function List(props) {
  if (!props.animals) {
    return <div>Loading...</div>;
  }

  if (props.animals.length === 0) {
    return <div>The list is empty</div>;
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") ? (
          <ListItem key={animal} animal={animal} />
        ) : null;
      })}
    </ul>
  );
}

function ListItem(props) {
  return <li>{props.animal}</li>;
}

export default App;
