import React, { Component } from 'react';
import logo from './logo.svg';
import Title from './components/title'
import Inputs from './components/inputs'
import InfoForm from './components/infoform'
import './App.css';

const API_KEY = '7b79d1ddfb686b4b32f3eeea83609067';

export default class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getData = async(e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const useData = await data.json();
    console.log(useData);
    
    if(city && country) {
      this.setState({
        temperature: useData.main.temp,
        city: useData.name,
        country: useData.sys.country,
        humidity: useData.main.humidity,
        description: useData.weather[0].description,
        error: ""
      })
    }else {
      this.setState(
        { temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: "Please enter the values."
        }
      );
    }
  }

  render() {
    return (
    <div>
      <Title/>
      <Inputs getWeather = {this.getData}/>
      <InfoForm 
        city = {this.state.city} 
        country = {this.state.country}
        temperature = {this.state.temperature}
        humidity = {this.state.humidity}
        description = {this.state.description}
        error = {this.state.error}/>
    </div>
    );
  }
}


