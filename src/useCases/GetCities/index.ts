import { FindOnLocalFile } from '../../providers/cityFinder/implementations/FindOnLocalFile';
import { GetCities } from './GetCities';
import { GetCitiesController } from './GetCitiesController';

const cityFinder = new FindOnLocalFile();

const getCities = new GetCities(cityFinder);

const getCitiesController = new GetCitiesController(getCities);

export { getCitiesController };