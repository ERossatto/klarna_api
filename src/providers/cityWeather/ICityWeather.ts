import { ICoordinate } from '@ICoordinate/*';
import { IWeather } from '@IWeather/*';

export interface ICityWeather {
  getCityWeatherByCoordinate(coordinate: ICoordinate): Promise<IWeather>;
}