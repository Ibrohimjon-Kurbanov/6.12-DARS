import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function handleClick(e) {
    e.preventDefault();
    if (counter == 0) {
      setCounter(1);
    } else if (counter == 1) {
      setCounter(2);
    } else {
      setCounter(0);
    }
  }

  return (
    <div>
      <div className="wrapper">
        <div
          className="shape1"
          style={{
            backgroundColor: counter == 0 ? "red" : "transparent",
          }}
        ></div>
        <div
          className="shape2"
          style={{
            backgroundColor: counter == 1 ? "yellow" : "transparent",
          }}
        ></div>
        <div
          className="shape3"
          style={{
            backgroundColor: counter == 2 ? "green" : "transparent",
          }}
        ></div>
      </div>
      <button className="btn" onClick={handleClick}>
        Click
      </button>
    </div>
  );
}

export default App;
