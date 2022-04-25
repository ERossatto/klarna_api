import { GetCityWeatherById } from "./GetCityWeatherById";
import { GetCityWeatherByIdController } from "./GetCityWeatherByIdController";

const getCityWeatherById = new GetCityWeatherById();

const getCityWeatherByIdController = new GetCityWeatherByIdController(getCityWeatherById);

export { getCityWeatherByIdController };