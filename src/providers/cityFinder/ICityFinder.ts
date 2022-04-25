import { ICity } from '@ICity/*';
import { ICoordinate } from '@ICoordinate/*';

export interface ICityFinder {
  getCityById(cityId: number): Promise<ICity>;
  getCitiesOnRangeByCoordinate(coordinate: ICoordinate, rangeInMeter: number): Promise<ICity[]>;
}