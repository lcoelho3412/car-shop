import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  public createCarDomain(car: ICar): Car | undefined {
    if (car) return new Car(car);
  }

  public async addNewCar(newCardata: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(newCardata);
    return this.createCarDomain(newCar);
  }

  public async getAllCars() {
    const allVehicle = new CarODM();
    const carsList = await allVehicle.find();
    if (carsList.length === 0) {
      return carsList;
    }
    return carsList.map((car) => this.createCarDomain(car));
  }

  public async getById(id:string) {
    const oneVehicle = new CarODM();
    const oneCarData = await oneVehicle.findById(id);
    if (!oneCarData) {
      throw new Error('Car not found');
    }
    return this.createCarDomain(oneCarData as ICar);
  }

  public async updateVehicleById(id:string, body: ICar) {
    await this.getById(id);
    const updateVehicle = new CarODM();
    await updateVehicle.updateById(id, body);
    return this.createCarDomain({ id, ...body });
  }
}