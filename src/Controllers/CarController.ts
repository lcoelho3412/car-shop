import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';
import ValidateObjectId from '../utils/ValidateObjectId';
// import HttpException from '../utils/HttpException';

// const MAX_MONGO_CHARACTER_LENGTH = 24; 

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;
  private validateObjectId = new ValidateObjectId();

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
      return this.res.status(201).json(newCar);
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

  public async getById() {
    const { id } = this.req.params;
  
    try {
      this.validateObjectId.validate(id);
      const message = await this.service.getById(id);
      return this.res.status(200).json(message);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateById() {
    const { id } = this.req.params;
    const { body } = this.req;
  
    try {
      this.validateObjectId.validate(id);
      const updateCar = await this.service.updateVehicleById(id, body);
      return this.res.status(200).json(updateCar);
    } catch (error) {
      this.next(error);
    }
  }
}