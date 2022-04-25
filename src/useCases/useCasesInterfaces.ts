import { Request, Response } from 'express';

export interface IUseCase<T, S> {
  execute(data: T): Promise<S>;
}

export interface IUseCaseController {
  handle(req: Request, res: Response): Promise<Response>;
}