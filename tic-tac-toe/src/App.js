import React, { useEffect, useState } from 'react';
import Component  from './component';
const initialState=["","","","","","","","",""];

function App() {
  const[gameState, updateGameState] = useState(initialState);
  const[isYourChance, updateYourChance] = useState(false);
  const onSquareClicked = (index)=> {
    let strings = Array.from(gameState);
    strings[index] = isYourChance ? "X" : "0";
    updateGameState(strings);
    updateYourChance(!isYourChance);
  }

  useEffect(()=> {
    const winner = CheckWinner();
    if(winner){
      alert(`Woohoooo ${winner} has won the game!!!`)
      updateGameState(initialState);
    }
  }, [gameState])

  const CheckWinner =()=>{
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    for (let i=0; i<lines.length;i++) {
      const [a,b,c] = lines[i];
      if(gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];
      }
    }
    return null;
  }
  return (
    <div className="app-header">
      <h1 className="app-heading">tic-tac-toe</h1>
      <div className="row">
        <Component state={gameState[0]} onClick={()=> onSquareClicked(0)}/>
        <Component state={gameState[1]} onClick={()=> onSquareClicked(1)}/>
        <Component state={gameState[2]} onClick={()=> onSquareClicked(2)}/>
      </div>
      <div className="row">
        <Component state={gameState[3]} onClick={()=> onSquareClicked(3)}/>
        <Component state={gameState[4]} onClick={()=> onSquareClicked(4)}/>
        <Component state={gameState[5]} onClick={()=> onSquareClicked(5)}/>
      </div>
      <div className="row">
        <Component state={gameState[6]} onClick={()=> onSquareClicked(6)}/>
        <Component state={gameState[7]} onClick={()=> onSquareClicked(7)}/>
        <Component state={gameState[8]} onClick={()=> onSquareClicked(8)}/>
      </div>
      <button className='clear-button' onClick={()=> updateGameState(initialState)}>Clear</button>
      <p>Siddhi</p>
    </div>
  );
}

export default App;