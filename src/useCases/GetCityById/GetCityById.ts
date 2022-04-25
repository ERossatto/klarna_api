import { ICityFinder } from './../../providers/cityFinder/ICityFinder';
import { ICity } from '@ICity/*';
import { IGetCityByIdDTO } from './IGetCityByIdDTO';
import { IUseCase } from '../useCasesInterfaces';

export class GetCityById implements IUseCase<IGetCityByIdDTO, ICity> {
  constructor(
    private cityFinder: ICityFinder,
  ) {}

  public async execute(data: IGetCityByIdDTO): Promise<ICity> {
    return await this.cityFinder.getCityById(data.cityId);
  }
}