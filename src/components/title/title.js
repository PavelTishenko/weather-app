import React, {Component} from 'react';
import './inputs.css'
export default class Title extends Component {
  render(){
    return (
    <div className="title-cont">
      <h1>Weather App</h1>
      <p>Do you need weather information ?</p>
    </div>
    );
  };
}