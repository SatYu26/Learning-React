import "./App.css";
import React from "react";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We serve {props.adjective}</p>
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish) => (
          <li>{dish}</li>
        ))}
      </ul>
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

const dishes = ["macaroni with cheese", "salmon", "tofu"];

function App() {
  return (
    <div className="App">
      <Header name="satyam" />
      <Main adjective="delicious" dishes={dishes} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
