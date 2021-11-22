import { getCitiesWeather } from './weather.gateway';

export const WEATHER_DATA_RECIEVED = 'WEATHER/WEATHER_DATA_RECIEVED';

export const weatherDataRecieved = weatherData => ({
  type: WEATHER_DATA_RECIEVED,
  payload: {
    weatherData,
  },
});

export const getWeatherData = () => dispatch => {
  getCitiesWeather().then(weatherData => dispatch(weatherDataRecieved(weatherData)));
};
