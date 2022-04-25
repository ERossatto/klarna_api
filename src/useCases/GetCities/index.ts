import { GeoLibProvider } from "../../providers/citiesLocation/implementations/GeoLibProvider";
import { GetCities } from "./GetCities";
import { GetCitiesController } from "./GetCitiesController";

const citiesLocation = new GeoLibProvider();

const getCities = new GetCities(citiesLocation);

const getCitiesController = new GetCitiesController(getCities);

export { getCitiesController };