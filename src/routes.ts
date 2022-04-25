import { Router } from 'express';
import { getCitiesController } from './useCases/GetCities';

const router = Router();

router.get('/cities', (req: any, res: any ) => { //TODO fix any
  return getCitiesController.handle(req, res);
});

router.get('/cities/:cityId', (req: any, res: any ) => { //TODO fix any
  const cityId = req.params.cityId;
  return res.status(201).send(cityId);
});

router.get('/cities/:cityId/weather', (req: any, res: any ) => { //TODO fix any
  const cityId = req.params.cityId;
  return res.status(201).send(cityId);
});

export { router };