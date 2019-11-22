import React from 'react';
import './App.css';

import Row from './Components/Row/Row'
import InputBox from './Components/InputBox/InputBox'

class App extends React.Component {
  constructor(props){
    super(props)
    this.submitHandler = this.submitHandler.bind(this) 
  }

  submitHandler(e) {
    e.preventDefault()
    // console.log("you did it!")
  }

  render() {
    const { rowCount, squareCount } = this.props
    const grid = [];
    for (let i = 0; i < rowCount; i++) {
      grid.push(<Row key={i} squareCount={squareCount} />)
    }
    return (
      <div>
      <form onSubmit={this.submitHandler}>

      <InputBox title="Username"/>
      <InputBox title="Password"/>

      <div className="grid">
        {grid}
      </div>
      
      <input type="submit"></input>

      </form>
      </div>
    );
  }
}

export default App;
