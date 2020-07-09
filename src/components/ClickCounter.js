//Displays the click number

import React from 'react';

const ClickCounter = (props) => {
  const style = {
    color: 'white',
    backgroundColor: 'red',
    borderStyle: 'double',
    borderRadius: '5px',
    width: '25%',
    float: 'left',
  };

  return (
    <div style={style}>
      <p>{props.numClicks}</p>
    </div>
  );
};

export default ClickCounter;
