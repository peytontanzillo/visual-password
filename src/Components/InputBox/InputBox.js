import React from 'react';
import './InputBox.css';


class InputBox extends React.Component {  
  render() {
    const { title } = this.props
    return (
      <div className="input-box">
        <label>{title}</label>
        <input type="text" placeholder=""/>
      </div>
    );
  }
}

export default InputBox;
