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
    const carODM = new CarODM();
    const carsList = await carODM.find();
    if (carsList.length === 0) {
      return carsList;
    }
    return carsList.map((car) => this.createCarDomain(car));
  }
}