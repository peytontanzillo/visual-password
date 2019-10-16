import React from 'react';
import './App.css';

import Row from './Components/Row/Row'

class App extends React.Component {

  render() {
    const { rowCount, squareCount } = this.props
    const grid = [];
    for (let i = 0; i < rowCount; i++) {
      grid.push(<Row key={i} squareCount={squareCount} />)
    }
    return (
      <div className="grid">
        {grid}
      </div>
    );
  }
}

export default App;
