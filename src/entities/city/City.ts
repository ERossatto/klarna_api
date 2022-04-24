import { ICity } from "./ICity.interface";

export class City implements ICity {

  public readonly id: number;
  public name: string;

  constructor(props: ICity) {
    Object.assign(this, props);
  }
}