import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async addNewCar() {
    const body: ICar = { ...this.req.body };
    try {
      const newCar = await this.service.addNewCar(body);
      return this.res.status(200).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAllCars() {
    try {
      const carsList = await this.service.getAllCars();
      return this.res.status(200).json(carsList);
    } catch (error) {
      this.next(error);
    }
  }
}