import React from 'react';
import './InputBox.css';


class InputBox extends React.Component {
  render() {
    const { title, type = "text", onChange } = this.props
    return (
      <div className="input-box">
        <label>{title}</label>
        <input type={type} placeholder="" onChange={onChange}/>
      </div>
    );
  }
}

export default InputBox;
