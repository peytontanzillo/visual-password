import React from 'react';

import Page from './Page'

import InputBox from '../Components/InputBox/InputBox'

function Traditional() {
  return (
    <Page>
      <h1>Login</h1>
      <InputBox title="Username"/>
      <InputBox title="Password"/>
    </Page>
  )
}

export default Traditional;
