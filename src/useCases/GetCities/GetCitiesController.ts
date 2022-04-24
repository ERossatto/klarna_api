import { Request, Response } from "express";
import { GetCities } from "./GetCities";
import { IGetCitiesDTO } from "./IGetCitiesDTO";

export class GetCitiesController {
  constructor(
    private getCities: GetCities,
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const data: IGetCitiesDTO = req.body;

    try {
      await this.getCities.execute(data);

      return res.status(200);
    } catch(err) {
      return res.status(400);
    }
  }

}