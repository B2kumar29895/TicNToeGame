import React, { useEffect, useState } from 'react';
import './App.css';
import Board from './component/Board/Board';
import ResetButton from './component/RestButton/ResetButton';
import ScoreBoard from './component/ScoreBoard/ScoreBoard';

function App() {
 const [board,setBoard]=useState(Array(9).fill(null));
 const WIN_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
const [xPlaying,setXPlaying]=useState(false);
const [score,setScore]=useState({xScore:0,oScore:0});
const [gameOver, setGameOver] = useState(false);
const [winner,SetWinner]=useState('');

const handleClick=(boxIdx)=>{
  let  updating=board.map((value,idx)=>{
    if(boxIdx===idx){
      return xPlaying?"X":"O"
    }
    else{
      return value
    }
  });
 
  setBoard(updating);
 
  
  setXPlaying(!xPlaying);
};

useEffect(()=>{
  const winner=checkWinner(board);
  SetWinner(winner)
},[board])

const checkWinner=(value)=>{
 for(let i=0;i<WIN_CONDITIONS.length;i++){
   let [x,y,z]=WIN_CONDITIONS[i];
   if(board[x]&& board[x]===board[y]&& board[y]===board[z]){
    setGameOver(true);
    return board[x];
   }
 }
}

useEffect(()=>{
  if(winner){
    if(winner==="X"){
      let {xScore}=score;
      xScore +=1;
      setScore({...score,xScore});
    }
    else{ 
      let {oScore}=score;
      oScore +=1;
      setScore({...score,oScore});
    }
  }
},[winner])

const resetBoard = () => {
  setGameOver(false);
  setBoard(Array(9).fill(null));
}
 
const refreshGame=()=>{
  setScore({xScore:0,oScore:0});
  setGameOver(false);
  setBoard(Array(9).fill(null));
}
  return (
    <> 
      
       <ScoreBoard score={score} xPlaying={xPlaying}/>
       <Board board={board} onClick={gameOver ? resetBoard : handleClick} />
       <ResetButton onClick={resetBoard}>

       <button onClick={refreshGame} style={{marginLeft:'10px',borderRadius:'5px'}}>Restart Game</button>
       </ResetButton>
    </>
  );
}

export default App;
