import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;
  
  constructor(data: ICar) {
    super(data);
    this.doorsQty = data.doorsQty;
    this.seatsQty = data.seatsQty;
  }
}

export default Car;