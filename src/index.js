import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Checkbox() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <React.Fragment>
      <input type="Checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </React.Fragment>
  );
}

ReactDOM.render(<Checkbox />, document.getElementById("root"));
