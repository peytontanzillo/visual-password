import React, {useState} from 'react'

import Row from '../Row/Row'

import EmojiPanel from '../EmojiPanel/EmojiPanel'

import PasswordContext from '../../Contexts/PasswordContext'

function VisualPassword({
  width,
  height,
  highlightColor = "aqua"
}) {

  const initialGrid = []
  const gridLength = width * height
  for (let i = 0; i < gridLength; i++) {
    initialGrid.push("")
  }

  const [passwordState, setPasswordState] = useState({grid: initialGrid, selectedSquare: undefined})

  const submitVisualPassword = () => {
    console.log(passwordState.grid)
  }

  const grid = [];
  for (let i = 0; i < height; i++) {
    grid.push(<Row key={i} rowNumber={i} squareCount={width} />)
  }

  const passContextData = {
    width: width,
    height: height,
    highlightColor: highlightColor,
    updatePasswordData: (id, value) => {
      const newGrid = passwordState.grid
      newGrid[id] = value
      setPasswordState({grid: newGrid, selected: passwordState.selected})
    },
    selectSquare: (s) => {
      console.log('select', s, passwordState)
      setPasswordState({grid: passwordState.grid, selected: s})
    },
    unselectSquare: (s) => {
      console.log('unselect', s, passwordState)
      if (passwordState.selected === s) {
        setPasswordState({grid: passwordState.grid, selected: undefined})
      }
    },
  }

  return (
    <PasswordContext.Provider value={passContextData}>
      <div className="password-container">
        <div className="grid">
          {grid}
        </div>
        {passwordState.selected ? <EmojiPanel/> : false}
      </div>
      <button onClick={submitVisualPassword}>Submit</button>
    </PasswordContext.Provider>
  )
}

export default VisualPassword;
