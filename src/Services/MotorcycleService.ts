import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  public createCarDomain(moto: IMotorcycle) {
    if (moto) return new Motorcycle(moto);
  }

  public async addMotorcycle(newCardata: IMotorcycle) {
    const carODM = new MotorcycleODM();
    const newCar = await carODM.create(newCardata);
    return this.createCarDomain(newCar);
  }

  public async getAllMotorcycle() {
    const allVehicle = new MotorcycleODM();
    const carsList = await allVehicle.find();
    if (carsList.length === 0) {
      return carsList;
    }
    return carsList.map((car) => this.createCarDomain(car));
  }

  public async getById(id:string) {
    const oneVehicle = new MotorcycleODM();
    const oneCarData = await oneVehicle.findById(id);
    if (!oneCarData) {
      throw new Error('Motorcycle not found');
    }
    return this.createCarDomain(oneCarData as IMotorcycle);
  }

  public async updateVehicleById(id:string, body: IMotorcycle) {
    await this.getById(id);
    const updateVehicle = new MotorcycleODM();
    await updateVehicle.updateById(id, body);
    return this.createCarDomain({ id, ...body });
  }

  public async deleteVehicle(id: string) {
    await this.getById(id);
    const deleteVehicle = new MotorcycleODM();
    await deleteVehicle.deleteById(id);
  }
}