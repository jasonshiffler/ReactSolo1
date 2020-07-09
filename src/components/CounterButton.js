//Buttons that can impact the number of clicks

import React from 'react';

const CounterButton = (props) => {
  const evenStyle = {
    color: 'white',
    border: 'none',
    backgroundColor: '#0d47a1',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center',
    display: 'inline-block',
    margin: '20px',
    float: 'left',
  };

  const oddStyle = {
    color: 'white',
    border: 'none',
    backgroundColor: '#fc7a1f',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center',
    display: 'inline-block',
    margin: '20px',
    float: 'left',
  };

  return (
    <div>
      <button
        style={props.numClicksIsEven ? evenStyle : oddStyle}
        onClick={props.click}
      >
        {props.label}
      </button>
    </div>
  );
};

export default CounterButton;
