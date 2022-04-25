import { ICity } from '@ICity/*';
import { IGetCitiesDTO } from './IGetCitiesDTO';
import { ICityFinder } from './../../providers/cityFinder/ICityFinder';

export class GetCities {
  constructor(
    private cityFinder: ICityFinder,
  ) {}

  public async execute(data: IGetCitiesDTO): Promise<ICity[]> {
    const rangeInMeters = 10000;
    return await this.cityFinder.getCitiesOnRangeByCoordinate(data, rangeInMeters);
  }
}