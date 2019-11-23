import React, {useState} from 'react'

import Row from '../Row/Row'


function VisualPassword({
  width,
  height,
  highlightColor = "red"
}) {

  const initialGrid = []
  const gridLength = width * height
  for (let i = 0; i < gridLength; i++) {
    initialGrid.push("")
  }

  const [gridArray, setGridArray] = useState(initialGrid)

  const handleChange = (id, value) => {
    const newGrid = gridArray
    newGrid[id] = value
    setGridArray(newGrid)
  }

  const submitVisualPassword = () => {
    console.log(gridArray)
  }

  const grid = [];
  for (let i = 0; i < height; i++) {
    grid.push(<Row key={i} rowNumber={i} squareCount={width} onSquareChange={handleChange}/>)
  }

  return (
    <div>
      <div className="grid">
        {grid}
      </div>
      <button onClick={submitVisualPassword}>Submit</button>
    </div>
  )
}

export default VisualPassword;
