import { getDistance } from 'geolib';

import { ICityFinder } from '../ICityFinder';
import { ICity } from '@ICity/*';
import { ICoordinate } from '@ICoordinate/*';
import { City } from '../../../entities/city/City';
import { readFile } from '../../../utils/json';

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
    return readFile<ICityList>(this.localFile);
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