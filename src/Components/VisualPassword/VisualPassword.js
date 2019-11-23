import React, {useState} from 'react'

import Row from '../Row/Row'

function VisualPassword({
  width,
  height,
  highlightColor = "red"
}) {
  const [selectedBox, setSelectedBox] = useState(undefined)

  const handleKeyPress = (e) => {
    if (selectedBox) {

    }
  }

  const handleSquareFocus = (square) => {
    square.target.style.borderColor = highlightColor
    if (selectedBox) {
      selectedBox.style.borderColor = "black"
    }
    setSelectedBox(square.target)
  }

  const handleSquareBlur = (square) => {
    square.target.style.borderColor = "black"
    if (selectedBox === square) {
      setSelectedBox(undefined)
    }
  }

  const grid = [];
  for (let i = 0; i < height; i++) {
    grid.push(<Row key={i} squareCount={width} rowNumber={i} onSquareFocus={handleSquareFocus} onSquareBlur={handleSquareBlur}/>)
  }
  return (<div className="grid">{grid}</div>)
}

export default VisualPassword;
