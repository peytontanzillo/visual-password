import React from 'react';
import './Square.css';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: null,
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      symbol: <div className="dot"></div>
    });
  }

  render() {
    return (
      <div className="square" onClick={this.clickHandler}>
        {this.state.symbol}
      </div>
    );
  }
}

export default Square;
