import React, {useState} from 'react'

import Page from './Page'

import InputBox from '../Components/InputBox/InputBox'

function Traditional() {
  const [passState, setPassState] = useState({password: '', submit: ''})

  const submitPassword = () => {
    let result = ""
    if (passState.password.length >= 8) {
      result = `You have submitted the password ${passState.password}`
    } else {
      result = "Your password needs to have 8 or more characters"
    }
    setPassState({password: passState, submit: result})
  }

  const passwordChange = (e) => {
    setPassState({password: e.target.value, submit: ""})
  }

  return (
    <Page>
      <h1>Traditional Password</h1>
      <InputBox title="Password" type="password" onChange={passwordChange}/>
      <button onClick={submitPassword}>Submit</button>
      <p>{passState.submit}</p>
    </Page>
  )
}

export default Traditional;
