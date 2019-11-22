import React from 'react';
import {Link} from 'react-router-dom';

import Page from './Page'

function NotFound() {
  return (
    <Page>
      <h1>404 page not found</h1>
      <Link to="/visual">Link to Visual Password</Link><br/>
      <Link to="/traditional">Link to Traditional Password</Link>
    </Page>
  )
}

export default NotFound;
