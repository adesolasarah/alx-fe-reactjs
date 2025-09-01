import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <h1>Hello everyone, I am learning React at ALX!</h1>
        <p>I am learning about JSX!</p>
        <p>This is a simple JSX component.</p>
      </div>
    </>
  );
}

export default App;
