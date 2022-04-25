import { OpenWeatherAPI } from './../../providers/cityWeather/implementations/OpenWeatherAPI';
import { GetCityWeatherById } from './GetCityWeatherById';
import { GetCityWeatherByIdController } from './GetCityWeatherByIdController';

const cityWeather = new OpenWeatherAPI();

const getCityWeatherById = new GetCityWeatherById(cityWeather);

const getCityWeatherByIdController = new GetCityWeatherByIdController(getCityWeatherById);

export { getCityWeatherByIdController };