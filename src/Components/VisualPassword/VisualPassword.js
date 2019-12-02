import React, {useState} from 'react'

import './VisualPassword.css'

import Row from '../Row/Row'

import EmojiPanel from '../EmojiPanel/EmojiPanel'

import PasswordContext from '../../Contexts/PasswordContext'

function VisualPassword({
  width,
  height,
  highlightColor = "aqua",
  blankSymbol = "_"
}) {
  const initialGrid = []
  const gridLength = width * height
  for (let i = 0; i < gridLength; i++) {
    initialGrid.push("")
  }

  const [passwordState, setPasswordState] = useState({grid: initialGrid, selectedSquare: undefined, submit: ""})

  const submitVisualPassword = () => {
    let result = ""
    let passwordLength = 0
    for (const letter of passwordState.grid) {
      if (letter) {
        result += letter
        passwordLength += 1
      } else {
        result += blankSymbol
      }
    }
    if (passwordLength >= 8) {
      result = `You have submitted the password ${result}`
    } else {
      result = "Your password needs to have 8 or more characters"
    }
    setPasswordState({grid: passwordState.grid,
    selected: passwordState.selected,
    submit: result})
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
        setPasswordState({grid: newGrid, selected: passwordState.selected, submit: ""})
      }
    },
    selectSquare: (s) => {
      setPasswordState({grid: passwordState.grid, selected: s})
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
      <p>{passwordState.submit}</p>
    </PasswordContext.Provider>
  )
}

export default VisualPassword;
