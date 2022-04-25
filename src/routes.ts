import { Router, Request, Response } from 'express';

import { getCitiesController } from './useCases/GetCities';
import { getCityByIdController } from './useCases/GetCityById';
import { getCityWeatherByIdController } from './useCases/GetCityWeatherById';

const router = Router();

router.get('/cities', (req: Request, res: Response ) => {
  return getCitiesController.handle(req, res);
});

router.get('/cities/:cityId', (req: Request, res: Response ) => {
  return getCityByIdController.handle(req, res);
});

router.get('/cities/:cityId/weather', (req: Request, res: Response ) => {
  return getCityWeatherByIdController.handle(req, res);
});

export { router };