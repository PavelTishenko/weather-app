import React,{Component} from 'react';

export default class Inputs extends Component{
  render(){
    const {getWeather} = this.props;
    return (
      <div>
        <form onSubmit = {getWeather}>
        <input name = 'city' placeholder = 'Add city'/>
        <input name = 'country' placeholder = 'Add country'/>
        <button>Check weather</button>
        </form>
      </div>
    );
  };
}