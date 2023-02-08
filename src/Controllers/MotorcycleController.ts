import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';
import ValidateObjectId from '../utils/ValidateObjectId';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;
  private validateObjectId = new ValidateObjectId();

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async addNewMotorcycleController() {
    const body: IMotorcycle = { ...this.req.body };
    try {
      const newCar = await this.service.addMotorcycle(body);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAllMotorcycleControllers() {
    try {
      const carsList = await this.service.getAllMotorcycle();
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

  public async deleteVehicle() {
    const { id } = this.req.params;
  
    try {
      this.validateObjectId.validate(id);
      await this.service.getById(id);
      return this.res.sendStatus(204); 
    } catch (error) {
      this.next(error);
    }
  }
}