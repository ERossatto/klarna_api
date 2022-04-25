import { readFileSync } from 'fs';
import { getDistance } from 'geolib';

import { ICity } from '@ICity/*';
import { ICitiesLocation } from 'providers/citiesLocation/ICitiesLocation';
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

export class GeoLibProvider implements ICitiesLocation {
  constructor() {}

  public async getCitiesByCoordinates(props: { lat: number, lng: number }): Promise<ICity[]> {
    console.log('lat: ', props.lat);
    console.log('lng: ', props.lng);
    
    const radiusInMeters = 10000;

    let cities = JSON.parse(readFileSync('city.list.json').toString()); //TODO tentar melhorar

    cities = cities.filter((city: ICityList) => {
      const distance = getDistance(
        { longitude: props.lng, latitude: props.lat },
        { longitude: city.coord.lon, latitude: city.coord.lat },
      );
      
      return (distance <= radiusInMeters);
    });

    return cities.map( (city: ICityList) => new City({id: city.id, name: city.name}));
  }
}