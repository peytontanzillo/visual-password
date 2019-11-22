import React from 'react';

import Page from './Page'

import VisualPassword from '../Components/VisualPassword/VisualPassword'
import InputBox from '../Components/InputBox/InputBox'

function Visual() {
  return (
    <Page>
      <h1>Login</h1>
      <InputBox title="Username"/>
      <VisualPassword width={5} height={5}/>
    </Page>
  )
}

export default Visual;
