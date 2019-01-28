import React, {Component} from 'react';

export default  class InfoForm extends Component {
  
  render(){
  const {city, country, humidity, temperature, 
        description,error} = this.props;
  if(!city && !country){
    return <p>{error}</p>
  }
  return (
    <div>
      <p>Location: {city}, {country}</p>
      <p>Temperature: {temperature}</p>
      <p>Humidity: {humidity}</p>
      <p>Discription: {description}</p>
    </div>
  );
}
}
