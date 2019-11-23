import React from 'react';
import './Row.css';

import Square from '../Square/Square'

function Row({
  rowNumber,
  squareCount,
  onSquareChange,
}) {
  const squares = [];
  for (let i = 0; i < squareCount; i++) {
    const squareID = rowNumber * squareCount + i
    squares.push(<Square key={i} squareID={squareID} onChange={onSquareChange}/>)
  }
  return (
    <div className="row">
      {squares}
    </div>
  );
}

export default Row;
