import "./App.css";
import React from "react";

function SecretComponent() {
  return <h1>secret info.</h1>;
}

function RegularComponent() {
  return <h1>Regular info.</h1>;
}

function App(props) {
  return <>{props.auth ? <SecretComponent /> : <RegularComponent />}</>;
}

export default App;
