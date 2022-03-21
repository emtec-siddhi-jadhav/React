import React from 'react';

function Component(props) {
    return (
      <span className='component-style' onClick={props.onClick}>
          {props.state}
      </span>
    );
  }
  
  export default Component;