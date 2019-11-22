import React from 'react';
import ReactDOM from 'react-dom';

import Visual from './Pages/Visual'
import Traditional from './Pages/Traditional'
import NotFound from './Pages/NotFound'
import {
  BrowserRouter as StaticRouter,
  Switch,
  Route,
} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

function MyRouter() {
  return (
    <StaticRouter>
      <Switch>
        <Route path="/visual" component={Visual}/>
        <Route path="/traditional" component={Traditional} />
        <Route component={NotFound} />
      </Switch>
    </StaticRouter>
  )
}

ReactDOM.render(<MyRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
