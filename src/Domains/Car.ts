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

  public setDoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }

  public getDoorsQty() {
    return this.doorsQty;
  }

  public setSeatQty(doorsQty: number) {
    this.seatsQty = doorsQty;
  }

  public getSetQty() {
    return this.seatsQty;
  }
}

export default Car;