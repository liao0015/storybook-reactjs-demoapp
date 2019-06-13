import React from 'react';

const Button = (props) => (
  <button 
    onClick={props.onClick}
    style={props.style}>
  {props.label}
  </button>
)

export default Button;