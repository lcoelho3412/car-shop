const outputCarListMock = [{
  id: '6348513f34c397abcad040b2',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
}, {
  id: '6348513f34c397abcad041b2',
  model: 'Gol',
  year: 2002,
  color: 'Gray',
  status: false,
  buyValue: 20.000,
  doorsQty: 4,
  seatsQty: 5,
}];

const inputOneSingleCar = {
  model: 'Gol',
  year: 2002,
  color: 'Gray',
  status: false,
  buyValue: 20.000,
  doorsQty: 4,
  seatsQty: 5,
};

const outputOneSingleCar = {
  id: '6348513f34c397abcad041b2',
  model: 'Gol',
  year: 2002,
  color: 'Gray',
  status: false,
  buyValue: 20.000,
  doorsQty: 4,
  seatsQty: 5,
};

const inputUpdateCar = {
  model: 'Marea',
  year: 2002,
  color: 'White',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const outputUpdateCar = {
  id: '6348513f34c397abcad040b2',
  model: 'Marea',
  year: 2002,
  color: 'White',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export default outputCarListMock;
export {
  outputCarListMock,
  inputOneSingleCar,
  outputOneSingleCar,
  inputUpdateCar,
  outputUpdateCar,
};