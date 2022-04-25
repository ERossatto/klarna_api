import { Request, Response } from 'express';

import { GetCityWeatherById } from './GetCityWeatherById';
import { IUseCaseController } from './../useCasesInterfaces';

export class GetCityWeatherByIdController implements IUseCaseController {

  constructor(
    private getCityWeatherById: GetCityWeatherById
  ) {}

  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const cityId = parseInt(req.params.cityId);

      const weather = await this.getCityWeatherById.execute({cityId});

      return res.status(200).json(weather);

    } catch(err) {
      return res.status(404).json({
        "code":"NotFoundError",
        "message":"not found"
      });
    }
  }

}