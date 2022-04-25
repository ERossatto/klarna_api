import { ICityWeather } from './../../providers/cityWeather/ICityWeather';
import { IUseCase } from './../useCasesInterfaces';
import { IWeather } from '@IWeather/*';
import { IGetCityWeatherByIdDTO } from './IGetCityWeatherByIdDTO';

export class GetCityWeatherById implements IUseCase<IGetCityWeatherByIdDTO, IWeather> {
  constructor(
    private cityWeather: ICityWeather,
  ) {}

  public async execute(data: IGetCityWeatherByIdDTO): Promise<IWeather> {
    return await this.cityWeather.getCityWeatherById(data.cityId);
  }
}