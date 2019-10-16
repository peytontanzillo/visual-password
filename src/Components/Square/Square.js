import React from 'react';
import './Square.css';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symbolIndex: 0,
    };
    this.fullSymbols = [
      <div key={0} />,
      <div key={1} className="symbol-thing dot red" />,
      <div key={2} className="symbol-thing blue" />,
      <div key={3} className="symbol-thing dot pink" />,
      <div key={4} className="symbol-thing green" />,
      <div key={5} className="symbol-thing dot purple" />,
      <div key={6} className="symbol-thing orange" />,
    ]

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      symbolIndex: this.state.symbolIndex + 1
    });
    if (this.state.symbolIndex >= this.fullSymbols.length-1) {
      this.setState({
        symbolIndex: 0
      });
    }
  }

  render() {
    console.log(this.state.symbolIndex)
    return (
      <div className="square" onClick={this.clickHandler}>
        {this.fullSymbols[this.state.symbolIndex]}
      </div>
    );
  }
}

export default Square;
