import { IWeather } from '@IWeather/*';

export interface ICityWeather {
  getCityWeatherById(cityId: number): Promise<IWeather>;
}