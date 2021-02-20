import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello(props) {
  console.log(props);
  return (
    <div>
      <h1>Welcome to {props.library}</h1>
      <p>Lets {props.message}</p>
      <p>{props.number} props total</p>
    </div>
  );
}

ReactDOM.render(
  <Hello 
  library="React" 
  message="Have fun" 
  number={3} 
  />,
  document.getElementById('root')
);
