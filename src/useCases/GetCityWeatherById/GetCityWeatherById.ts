import { Weather } from './../../entities/weather/Weather';
import { IUseCase } from './../useCasesInterfaces';
import { IWeather } from "@IWeather/*";
import { IGetCityWeatherByIdDTO } from "./IGetCityWeatherByIdDTO";

export class GetCityWeatherById implements IUseCase<IGetCityWeatherByIdDTO, IWeather> {
  constructor() {}

  public async execute(data: IGetCityWeatherByIdDTO): Promise<IWeather> {
    console.log('data: ', data);
    
    return new Weather({
      type: "Clear",
      type_description: "clear sky",
      sunrise: "2016-08-23T08:00:00.000Z",
      sunset: "2016-08-23T22:00:00.000Z",
      temp: 29.72,
      temp_min: 26.67,
      temp_max: 35,
      pressure: 1026,
      humidity: 36,
      clouds_percent: 0,
      wind_speed: 1.5,
    })
  }
}