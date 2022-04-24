import { IWeather } from "@IWeather/*";

export interface ICitiesWeather {
  getCitiesWeatherByIds(ids: number[]): Promise<IWeather[]>;
}