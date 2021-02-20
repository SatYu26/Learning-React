import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lakeList = [
  {id: "1", name: "Echo", trailhead: "Echo"}, 
  {id: "2", name: "ganga", trailhead: "satyam"}, 
  {id: "3", name: "jamuna", trailhead: "damm"},
];

function App({ lakes }) {
  return (
  
  <div>
    {
      lakes.map(lake => <div>
      <h2>{lake.name}</h2>
      <p>Access by: {lake.trailhead}</p>
    </div>)
    }
  </div>
  );
}

ReactDOM.render(
  <App lakes={ lakeList } />,
  document.getElementById('root')
);
