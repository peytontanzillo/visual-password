import React from 'react';
import './Row.css';

import Square from '../Square/Square'

class Row extends React.Component {
  render() {
    const { squareCount } = this.props
    const squares = [];
    for (let i = 0; i < squareCount; i++) {
      squares.push(<Square/>)
    }
    return (
      <div className="row">
        {squares}
      </div>
    );
  }
}

export default Row;
