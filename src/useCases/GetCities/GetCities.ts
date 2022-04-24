import { ICity } from "@ICity/*";
import { ICitiesLocation } from "providers/citiesLocation/ICitiesLocation";
import { IGetCitiesDTO } from "./IGetCitiesDTO";

export class GetCities {
  constructor(
    private citiesLocation: ICitiesLocation,
  ) {}

  public async execute(data: IGetCitiesDTO): Promise<ICity[]> {
    return await this.citiesLocation.getCitiesByCoordinates(data);
  }
}