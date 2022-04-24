import { ICity } from '@ICity/*';

export interface ICitiesLocation {
  getCitiesByCoordinates(props: { lat: number, lng: number }): Promise<ICity[]>
}