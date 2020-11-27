import React, { useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [count, setCount] = useState(0);
  let input;
  var interval;

  useEffect(() => {});
  const handleKeyDown = (el) => {
    input =
      parseInt(el.target.value) !== parseInt(el.target.value)
        ? 0
        : parseInt(el.target.value);

    if (el.key === "Enter") {
      setCount(input);
      interval = setInterval(() => {
        setCount(input);
        if (input <= 0) {
          clearInterval(interval);
        }
        input--;
      }, 1000);
    }
  };

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={(el) => handleKeyDown(el)} /> sec.
        </h1>
      </div>
      <div id="current-time">{count}</div>
    </div>
  );
};

export default App;
