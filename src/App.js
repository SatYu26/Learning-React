import "./App.css";
import React from "react";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main({ adjective, exp }) {
  return (
    <section>
      <p>
        We {exp} {adjective}
      </p>
    </section>
  );
}

function Footer({ year }) {
  return (
    <footer>
      <h3>{year}</h3>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header name="satyam" />
      <Main adjective="delicious" exp="serve" />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
