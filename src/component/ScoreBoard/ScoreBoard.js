import React from 'react';
import  "./ScoreBoard.css"

const ScoreBoard = ({score,xPlaying}) => {
    const {xScore,oScore}=score;
  return (
    <div className='scoreBorad'>
      <span className={`score xScore ${!xPlaying && "inactive"}`}>{"X - "+xScore}</span>
      <span  className={`score oScore  ${xPlaying && "inactive"}`}>{"O - "+oScore}</span>
    </div>
  )
}

export default ScoreBoard
