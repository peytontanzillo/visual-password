import React from 'react';
import './Row.css';

import Square from '../Square/Square'

function Row({
  rowNumber,
  squareCount,
  onSquareFocus,
  onSquareBlur,
}) {
  const squares = [];
  for (let i = 0; i < squareCount; i++) {
    squares.push(<Square key={i} onFocus={onSquareFocus} onBlur={onSquareBlur}/>)
  }
  return (
    <div className="row">
      {squares}
    </div>
  );
}

export default Row;
