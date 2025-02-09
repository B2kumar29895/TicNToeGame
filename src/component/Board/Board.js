import React from 'react'
import Box from '../Box/Box';
import './Board.css'

const Board = ({board,onClick}) => {
  return (
    <div className='board'>
    { board.map((value,idx)=>
        <Box key={idx}value={value} onClick={()=>value===null&&onClick(idx)}/>
    )
   }
    </div>
  )
}

export default Board
