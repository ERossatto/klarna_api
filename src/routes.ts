import { Router, Request, Response } from 'express';

import { getCitiesController } from './useCases/GetCities';
import { getCityByIdController } from './useCases/GetCityById';

const router = Router();

router.get('/cities', (req: Request, res: Response ) => {
  return getCitiesController.handle(req, res);
});

router.get('/cities/:cityId', (req: Request, res: Response ) => {
  return getCityByIdController.handle(req, res);
});

router.get('/cities/:cityId/weather', (req: Request, res: Response ) => {
  const cityId = req.params.cityId;
  return res.status(201).send(cityId);
});

export { router };