import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello({ library, message, number}) {
  return (
    <div>
      <h1>Welcome to {library}</h1>
      <p>Lets {message}</p>
      <p>{number} props total</p>
    </div>
  );
}

ReactDOM.render(
  <Hello 
  library="React" 
  message="Add Dynamic data" 
  number={3} 
  />,
  document.getElementById('root')
);
