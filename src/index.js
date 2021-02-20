import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello() {
  return (
    <div>
      <h1>Welcome</h1>
      <p>Lets Build</p>
    </div>
  );
}

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);
