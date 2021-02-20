import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake({ name }) {
  return (
    <h1>{ name }</h1>
  );
}

function App() {
  return (
  <div>
    <Lake name="Lake taho" />
    <Lake name="ganga" />
    <Lake name="jamuna" />
  </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
