import React from 'react';
import {Link} from 'react-router-dom';

import Page from './Page'

import emojis from '../Data/EmojiList'

function NotFound() {
  console.log(emojis)
  return (
    <Page>
      <h1>404 page not found</h1>
      <Link to="/visual">Link to Visual Password</Link><br/>
      <Link to="/traditional">Link to Traditional Password</Link><br/>
      {emojis}
    </Page>
  )
}

export default NotFound;
