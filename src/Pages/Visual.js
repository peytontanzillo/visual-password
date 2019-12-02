import React from 'react';

import Page from './Page'

import VisualPassword from '../Components/VisualPassword/VisualPassword'

function Visual() {
  return (
    <Page>
      <h1>Visual Password</h1>
      <VisualPassword width={5} height={5} blankSymbol="$"/>
    </Page>
  )
}

export default Visual;
