import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [count, setCount] = useState();
  let value;
  let interval;

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      clearInterval(interval);
      value =
        parseInt(event.target.value) === parseInt(event.target.value)
          ? parseInt(event.target.value)
          : 0;
      setCount(value);
      interval = setInterval(() => {
        if (value <= 0) clearInterval(interval);
        setCount(value--);
      }, 1000);
    }
  };

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
