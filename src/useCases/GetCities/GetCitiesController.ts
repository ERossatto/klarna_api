import { Request, Response } from "express";
import { GetCities } from "./GetCities";
import { IGetCitiesDTO } from "./IGetCitiesDTO";

interface CustomRequest extends Request {
  query: {
    lat: string,
    lng: string,
  };
};

export class GetCitiesController {
  constructor(
    private getCities: GetCities,
  ) {}

  async handle(req: CustomRequest, res: Response): Promise<Response> {
    const lat = parseFloat(req.query.lat);
    const lng = parseFloat(req.query.lng);
    
    if (!lat || !lng) throw new Error();

    try {
      const cities = await this.getCities.execute({ lat, lng });

      return res.status(200).send(cities);
    } catch(err) {
      return res.status(400).json({
        "code":"BadRequestError",
        "message":"lat/lng required"
      });
    }
  }

}