import React, {useState, useContext} from 'react';
import './Square.css';

import PasswordContext from '../../Contexts/PasswordContext'

function Square({
  squareID,
  style,
  onChange,
}) {
  const password = useContext(PasswordContext)

  const [squareValue, setSquareValue] = useState('')

  const onFocus = (e) => {
    e.target.style.borderColor = password.highlightColor
    password.selectSquare(e.target)
  }

  const onBlur = (e) => {
    e.target.style.borderColor = "black"
    password.unselectSquare(e.target)
  }

  const handleChange = (e) => {
    let newValue = e.target.value
    if (newValue.length > 1) {
      newValue = newValue.charAt(newValue.length - 1)
    }
    setSquareValue(newValue)
    password.updatePasswordData(parseInt(e.target.name), newValue)
  }

  return (
    <>
      <input name={squareID} className="square" style={style} onFocus={onFocus} onBlur={onBlur} onChange={handleChange} value={squareValue}/>
    </>
  );
}


export default Square;
