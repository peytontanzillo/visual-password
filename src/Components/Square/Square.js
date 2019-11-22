import React, {useState} from 'react';
import './Square.css';

function Square () {

    const [symbolIndex, setSymbolIndex] = useState(0)
    const fullSymbols = [
      <div key={0} />,
      <div key={1} className="symbol-thing dot red" />,
      <div key={2} className="symbol-thing blue" />,
      <div key={3} className="symbol-thing dot pink" />,
      <div key={4} className="symbol-thing green" />,
      <div key={5} className="symbol-thing dot purple" />,
      <div key={6} className="symbol-thing orange" />,
    ]

  const clickHandler = () => {
    setSymbolIndex(symbolIndex + 1)
    if (symbolIndex >= fullSymbols.length - 1) {
      setSymbolIndex(0)
    }
  }

  return (
    <div className="square" onClick={clickHandler}>
      {fullSymbols[symbolIndex]}
    </div>
  );
}

export default Square;
