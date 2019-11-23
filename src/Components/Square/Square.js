import React, {useState} from 'react';
import './Square.css';

function Square({
  squareID,
  style,
  onChange,
}) {

  const [squareValue, setSquareValue] = useState('')

  const onFocus = (square) => {
    square.target.style.borderColor = "red"
  }

  const onBlur = (square) => {
    square.target.style.borderColor = "black"
  }

  const handleChange = (e) => {
    let value = e.target.value
    if (value.length > 1) {
      value = value.charAt(value.length - 1)
    }
    setSquareValue(value)
    onChange(parseInt(e.target.id), value)
  }

  return (
    <input id={squareID} className="square" style={style} onFocus={onFocus} onBlur={onBlur} onChange={handleChange} value={squareValue}/>
  );
}


export default Square;
