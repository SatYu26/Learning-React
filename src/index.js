import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Checkbox() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    alert(`checked: ${checked.toString()}`);
  });
  return (
    <React.Fragment>
      <input
        type="Checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      {checked ? "checked" : "not checked"}
    </React.Fragment>
  );
}

ReactDOM.render(<Checkbox />, document.getElementById("root"));
