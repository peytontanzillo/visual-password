import React from 'react'

import Row from '../Row/Row'

function VisualPassword({
  width,
  height
}) {
  const grid = [];
  for (let i = 0; i < height; i++) {
    grid.push(<Row key={i} squareCount={width} />)
  }
  return (<div className="grid">{grid}</div>)
}

export default VisualPassword;
