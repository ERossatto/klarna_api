import { Request, Response } from 'express';

import { IUseCaseController } from './../useCasesInterfaces';
import { Coordinate } from '../../entities/coordinate/Coordinate';
import { GetCities } from './GetCities';

export class GetCitiesController implements IUseCaseController {
  constructor(
    private getCities: GetCities,
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const lat = req.query?.lat;
      const lng = req.query?.lng;
      
      if (!lat || !lng) throw new Error();
  
      const coordinate = new Coordinate({
        lat: parseFloat(lat as string), //TODO testar se livrar disso
        lng: parseFloat(lng as string)
      });

      const cities = await this.getCities.execute(coordinate);

      return res.status(200).json(cities);

    } catch(err) {
      return res.status(400).json({
        "code":"BadRequestError",
        "message":"lat/lng required"
      });
    }
  }

}