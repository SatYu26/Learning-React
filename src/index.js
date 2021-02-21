import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [year, setYear] = useState("2050");
  const [manager, setManager] = useState("Alex");
  const [status, setStatus] = useState("Open");
  return (
    <React.Fragment>
      <div>
        <h1>{year}</h1>
        <button onClick={() => setYear(year + 1)}>change year</button>
      </div>
      <div>
        <h1>Manager on duty: {manager}</h1>
        <button onClick={() => setManager("Rock")}>Change Manager</button>
      </div>
      <div>
        <h1>Status: {status}</h1>
        <button onClick={() => setStatus("Closed")}>Closed</button>
        <button onClick={() => setStatus("Open")}>Open</button>
        <button onClick={() => setStatus("Back in 5")}>Break</button>
      </div>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
