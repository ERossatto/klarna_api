import { IWeather } from "./IWeather.interface";

export class Weather implements IWeather {

  public type: string;
  public type_description: string;
  public sunrise: string;
  public sunset: string;
  public temp: number;
  public temp_min: number;
  public temp_max: number;
  public pressure: number;
  public humidity: number;
  public clouds_percent: number;
  public wind_speed: number;

  constructor(props: IWeather) {
    Object.assign(this, props);
  }
}