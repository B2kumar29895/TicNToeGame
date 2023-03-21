import React from 'react';
import "./ResetButton.css"

const ResetButton = (props) => {
  return (
    <div className='btnContainer'>
      <botton  className='button' onClick={props.onClick}>Reset Board</botton>
      {props.children}
    </div>
  )
}

export default ResetButton
