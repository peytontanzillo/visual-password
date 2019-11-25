import React, {useContext} from 'react';
import './Row.css';

import Square from '../Square/Square'

import PasswordContext from '../../Contexts/PasswordContext'

function Row({
  rowNumber,
}) {
  const password = useContext(PasswordContext)
  const squares = [];
  for (let i = 0; i < password.width; i++) {
    const squareID = rowNumber * password.width + i
    squares.push(<Square key={i} squareID={squareID}/>)
  }
  return (
    <div className="row">
      {squares}
    </div>
  );
}

export default Row;
