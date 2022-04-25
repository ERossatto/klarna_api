import { ICoordinate } from '@ICoordinate/*';
import { ICity } from './ICity';

export class City implements ICity {

  public readonly id: number;
  public name: string;
  public lat: number;
  public lng: number;

  constructor(props: Omit<ICity, 'lat' | 'lng'>, coordinate?: ICoordinate) {
    Object.assign(this, props);
    
    if (!!coordinate) Object.assign(this, coordinate);
  }
}