import { readFileSync } from 'fs';
import { getDistance } from 'geolib';

import { ICity } from '@ICity/*';
import { City } from '../../../entities/city/City';
import { ICoordinate } from '@ICoordinate/*';
import { ICitiesLocation } from 'providers/citiesLocation/ICitiesLocation';

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

export class GeoLibProvider implements ICitiesLocation {
  constructor() {}

  public async getCitiesByCoordinates(props: ICoordinate): Promise<ICity[]> {
    const radiusInMeters = 10000; //TODO colocar no environment
    let cities = JSON.parse(readFileSync('city.list.json').toString()); //TODO tentar melhorar

    cities = cities.filter((city: ICityList) => {
      const distance = getDistance(
        { longitude: props.lng, latitude: props.lat },
        { longitude: city.coord.lon, latitude: city.coord.lat },
      );
      
      return (distance <= radiusInMeters);
    });

    const parseOut = (cities: ICityList[]): ICity[] => {
      return cities.map( (city: ICityList) => new City({id: city.id, name: city.name}));
    };
    
    return parseOut(cities);
  }
}