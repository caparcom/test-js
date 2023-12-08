import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';

import App from './App';

function Square({ value }){
  return <button className="square">{value}</button>
}

export default function Board() {
  return (
  <>
  <div className="board-row1">
    <Square value="1" />
    <Square value="2" />
    <Square value="3" />
  </div>
 <br />
  <div className="board-row2">
    <Square value="4" />
    <Square value="5" />
    <Square value="6" />
  </div>
  <br />
  
  <div className="board-row3">
    <Square value="7" />
    <Square value="8" />
    <Square value="9" />
  </div>

  </>
  );
}
