import { getDistance } from 'geolib';
import { readFileSync } from 'fs';

import { ICityFinder } from '../ICityFinder';
import { ICity } from '@ICity/*';
import { ICoordinate } from '@ICoordinate/*';
import { City } from '../../../entities/city/City';

interface ICityList {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: {
    lon: number,
    lat: number,
  };
};

export class FindOnLocalFile implements ICityFinder {

  private localFile = 'city.list.json';

  constructor() {}

  private getCityList(): ICityList[] {
    return JSON.parse(readFileSync(this.localFile).toString());
  }

  public async getCityById(cityId: number): Promise<ICity> {
    const cities = this.getCityList();

    const city = cities.find(city => city.id === cityId);

    return new City(
      {id: city.id, name: city.name},
      {lat: city.coord.lat, lng: city.coord.lon}
    );
  }

  public async getCitiesOnRangeByCoordinate(
    coordinate: ICoordinate,
    rangeInMeter: number
  ): Promise<ICity[]> {
    let cities = this.getCityList();

    cities = cities.filter((city: ICityList) => {
      const distance = getDistance(
        { latitude: coordinate.lat, longitude: coordinate.lng },
        { latitude: city.coord.lat, longitude: city.coord.lon },
      );
      
      return (distance <= rangeInMeter);
    });

    const parseOut = (cities: ICityList[]): ICity[] => {
      return cities.map( (city: ICityList) => new City({id: city.id, name: city.name}));
    };
    
    return parseOut(cities);
  }
}