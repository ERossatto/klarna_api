import { IUseCase } from './../useCasesInterfaces';
import { ICity } from '@ICity/*';
import { IGetCitiesDTO } from './IGetCitiesDTO';
import { ICityFinder } from './../../providers/cityFinder/ICityFinder';

export class GetCities implements IUseCase<IGetCitiesDTO, ICity[]>{
  constructor(
    private cityFinder: ICityFinder,
  ) {}

  public async execute(data: IGetCitiesDTO): Promise<ICity[]> {
    return await this.cityFinder.getCitiesOnRangeByCoordinate(data.coordinate, data.rangeInMeters);
  }
}