import { ICityFinder } from './../../providers/cityFinder/ICityFinder';
import { ICity } from '@ICity/*';
import { IGetCityByIdDTO } from './IGetCityByIdDTO';

export class GetCityById {
  constructor(
    private cityFinder: ICityFinder,
  ) {}

  public async execute(data: IGetCityByIdDTO): Promise<ICity> {
    return await this.cityFinder.getCityById(data.cityId);
  }
}