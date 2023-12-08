import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import { useState } from 'react';
import App from './App';

function Square({ value, onSquareCLick }){
  return <button className="square" onClick={onSquareCLick}>{value}</button>;
}

export default function Board() {

  const[squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){
    const nextSquares = squares.slice();
    nextSquares[i] = 'X';
    setSquares(nextSquares);
  };

  return (
  <>
  <div className="board-row1">
    <Square value={squares[0]} onSquareCLick={() => handleClick(0)} />
    <Square value={squares[1]} onSquareCLick={() => handleClick(1)} />
    <Square value={squares[2]} onSquareCLick={() => handleClick(2)} />
  </div>
 <br />
  <div className="board-row2">
    <Square value={squares[3]} onSquareCLick={() => handleClick(3)} />
    <Square value={squares[4]} onSquareCLick={() => handleClick(4)} />
    <Square value={squares[5]} onSquareCLick={() => handleClick(5)} />
  </div>
  <br />
  
  <div className="board-row3">
    <Square value={squares[6]} onSquareCLick={() => handleClick(6)} />
    <Square value={squares[7]} onSquareCLick={() => handleClick(7)} />
    <Square value={squares[8]} onSquareCLick={() => handleClick(8)} />
  </div>

  </>
  );
}
