import { ICity } from "./ICity";

export class City implements ICity {

  public readonly id: number;
  public name: string;
  public lat: number;
  public lng: number;

  constructor(props: Omit<ICity, 'lat' | 'lng'>, lat?: number, lng?: number) {
    Object.assign(this, props);
  }
}