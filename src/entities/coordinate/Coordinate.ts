import { ICoordinate } from "./ICoordinate";

export class Coordinate implements ICoordinate {

  public lat: number;
  public lng: number;

  constructor(props: ICoordinate) {
    Object.assign(this, props);
  }
}