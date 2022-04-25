import { GetCityById } from './GetCityById';
import { Request, Response } from 'express';

export class GetCityByIdController {
  constructor(
    private getCityById: GetCityById,
  ) {}

  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const cityId = req.params.cityId;

      const city = await this.getCityById.execute({cityId: parseInt(cityId)});

      return res.status(200).send(city);
      
    } catch(err) {
      return res.status(404).json({
        "code":"NotFoundError",
        "message":"not found"
      });
    }
  }
}