import React, {useState} from 'react';
import './Square.css';

function Square({
  style,
  onFocus,
  onBlur,
}) {

  const [squareValue, setSquareValue] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    if (value.length > 1) {
      setSquareValue(value.charAt(value.length - 1))
    } else {
      setSquareValue(value)
    }
  }

  return (
    <input className="square" style={style} onFocus={onFocus} onBlur={onBlur} onChange={handleChange} value={squareValue}/>
  );
}

export default Square;
