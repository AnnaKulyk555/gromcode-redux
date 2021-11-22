import React from 'react';
import { connect } from 'react-redux';

import * as weatherActions from './weather.actions';

class Weather extends React.Component {
  componentDidMount() {
    this.props.getWeatherData();
  }

  render() {
    return (
      <main className="weather">
        <h1 className="weather__title">Weather data</h1>
        <ul className="cities-list">
          {this.props.weatherData.map(weatherData => (
            <li key={weatherData.id} className="city">
              <span className="city__name">{weatherData.name}</span>
              <span className="city__temperature">{weatherData.temperature} F</span>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

const mapState = state => ({
  weatherData: state.weather.weatherData,
});

const mapDispatch = {
  getWeatherData: weatherActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
