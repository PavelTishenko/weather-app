import React, {Component} from 'react';
import './infoform.css'
export default  class InfoForm extends Component {
  
  render(){
  const {city, country, humidity, temperature, 
        description,error} = this.props;
  if(!city && !country){
    return <p>{error}</p>
  }
  return (
    <div>
      <p><span>Location:</span> {city}, {country}</p>
      <p><span>Temperature:</span> {temperature}</p>
      <p><span>Humidity:</span> {humidity}</p>
      <p><span>Discription:</span> {description}</p>
    </div>
  );
}
}
