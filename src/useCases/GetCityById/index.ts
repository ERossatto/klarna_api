import { FindOnLocalFile } from './../../providers/cityFinder/implementations/FindOnLocalFile';
import { GetCityById } from './GetCityById';
import { GetCityByIdController } from './GetCityByIdController';

const cityFinder = new FindOnLocalFile();

const getCityById = new GetCityById(cityFinder);

const getCityByIdController = new GetCityByIdController(getCityById);

export { getCityByIdController };