import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(data: IMotorcycle) {
    super(data);
    this.category = data.category;
    this.engineCapacity = data.engineCapacity;
  }
}