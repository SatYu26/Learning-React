import "./App.css";
import React from "react";

function Header() {
  return (
    <header>
      <h1>Eve's Kitchen</h1>
    </header>
  );
}

function Main() {
  return (
    <section>
      <p>We serve Happiness</p>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <h3>Its True</h3>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
