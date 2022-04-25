import { ICity } from '@ICity/*';
import { ICoordinate } from '@ICoordinate/*';

export interface ICitiesLocation {
  getCitiesByCoordinates(props: ICoordinate): Promise<ICity[]>;
}