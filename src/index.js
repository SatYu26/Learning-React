import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


ReactDOM.render(
  React.createElement("div", {style: {color: "red"}}, React.createElement("h1", null, "hi!!")),
  document.getElementById('root')
);
