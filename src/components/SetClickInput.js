//Input field that allows the number of clicks to adjusted

import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

const SetClickInput = (props) => {
  return (
    <div>
      <label>Num Clicks</label>
      <input
        type='number'
        onChange={props.changed}
        value={props.numClicks}
      ></input>
    </div>
  );
};

export default SetClickInput;
