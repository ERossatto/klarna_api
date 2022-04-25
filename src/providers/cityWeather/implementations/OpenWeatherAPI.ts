import axios from 'axios';

import { Weather } from './../../../entities/weather/Weather';
import { IWeather } from '@IWeather/*';
import { ICityWeather } from '../ICityWeather';
import { parseUnixTimestamp } from  '../../../utils/date';

interface IWeatherApiRes {
  coord: {
    lon: number,
    lat: number
  };
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
  ];
  base: string;
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
  };
  visibility: number;
  wind: {
    speed: number,
    deg: number
  };
  clouds: {
    all: number
  };
  dt: number;
  sys: {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export class OpenWeatherAPI implements ICityWeather {

  public API = {
    key: 'ca1dc546442b058674b7a36058494bcf', // Do not worry about exposing it.
    url: 'http://api.openweathermap.org/data/2.5/weather',
    unitOfMeasurement: 'metric',
  };

  constructor() {}

  public async getCityWeatherById(cityId: number): Promise<IWeather> {

    const getWeather = async (): Promise<IWeatherApiRes> => {
      const params = {
        id: cityId,
        appid: this.API.key,
        units: this.API.unitOfMeasurement,
      };

      const { data } = await axios.get(this.API.url, { params });

      return data;
    };

    const weather: IWeatherApiRes = await getWeather();
    
    return new Weather({
      type: weather.weather[0].main,
      type_description: weather.weather[0].description,
      sunrise: parseUnixTimestamp(weather.sys.sunrise),
      sunset: parseUnixTimestamp(weather.sys.sunset),
      temp: weather.main.temp,
      temp_min: weather.main.temp_min,
      temp_max: weather.main.temp_max,
      pressure: weather.main.pressure,
      humidity: weather.main.humidity,
      clouds_percent: weather.clouds.all,
      wind_speed: weather.wind.speed,
    })
  }

}