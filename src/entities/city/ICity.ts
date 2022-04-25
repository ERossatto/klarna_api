import { ICoordinate } from '@ICoordinate/*';

export interface ICity extends ICoordinate{
  id: number;
  name: string;
  lat: number;
  lng: number;
}