import { ICoordinate } from '@ICoordinate/*';
import { ICity } from './ICity';

export class City implements ICity {

  public readonly id: number;
  public name: string;
  public coordinate: ICoordinate;

  constructor(props: Omit<ICity, 'coordinate'>, coordinate?: ICoordinate) {
    Object.assign(this, props);
    
    if (!!coordinate) this.coordinate = coordinate;
  }
}