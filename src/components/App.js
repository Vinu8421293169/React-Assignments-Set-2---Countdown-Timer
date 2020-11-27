import React, { useState } from "react";
import "../styles/App.css";

function App() {
  const [count, setCount] = useState();
  let value;
  var interval;

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      clearInterval(interval);
      let val = parseInt(event.target.value);
      value = val === val ? val : 0;
      interval = setInterval(() => {
        if (value <= 0) clearInterval(interval);
        setCount(value--);
      }, 1000);
    }
  }

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={(event) => handleKeyDown(event)} />
          sec.
        </h1>
      </div>
      <div id="current-time">{count}</div>
    </div>
  );
}

export default App;
