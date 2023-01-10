import React, { useState } from 'react';
import './scoreBoard.css'

function ScoreBoard(props) {
// let [score, setScore]= useState(0);

const resetScore=()=>{
  props.updateScore(0)
}

  return (
    <div className='scoreBoard'>
        <h4 className='totalHeadline'>Total Score</h4>
        <p className='score'>{props.score}</p>
        <button type='button' className='resetBtn' onClick={resetScore}>Reset</button>
    </div>
  )
}

export default ScoreBoard