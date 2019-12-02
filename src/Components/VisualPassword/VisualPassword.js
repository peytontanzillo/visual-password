import React, {useState} from 'react'

import './VisualPassword.css'

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
      if (id !== -1) {
        const newGrid = passwordState.grid
        newGrid[id] = value
        setPasswordState({grid: newGrid, selected: passwordState.selected})
      }
    },
    selectSquare: (s) => {
      setPasswordState({grid: passwordState.grid, selected: s})
    },
    unselectSquare: (s) => {
      if (passwordState.selected === s) {
        setPasswordState({grid: passwordState.grid, selected: undefined})
      }
    },
    setEmoji: (emoji) => {
      passContextData.updatePasswordData(parseInt(passwordState.selected.name ? passwordState.selected.name : 0), emoji)
    },
    grid: passwordState.grid
  }

  return (
    <PasswordContext.Provider value={passContextData}>
      <div className="password-container">
        <div className="grid">
          {grid}
        </div>
        {<EmojiPanel/>}
      </div>
      <button onClick={submitVisualPassword}>Submit</button>
    </PasswordContext.Provider>
  )
}

export default VisualPassword;
