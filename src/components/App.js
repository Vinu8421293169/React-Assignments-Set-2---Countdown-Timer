import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [count, setCount] = useState(0);
  let interval;
  let value;

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      value = 0;
      clearInterval(interval);
      value = parseInt(event.target.value);

      interval = setInterval(() => {
        setCount(value);
        value -= 1;
        if (value === 0) {
          clearInterval(interval);
        }
      }, 1000);
    }
  }

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            onKeyDown={(event) => handleKeyDown(event)}
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{count}</div>
    </div>
  );
};

export default App;
