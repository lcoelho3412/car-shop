import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';
import { outputCarListMock } from '../mocks/carMocks';

describe('Testes relacionados a função de listar todos os carros cadastrados', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('lista todos os carros com sucesso', async function () {
    const output: Car[] = outputCarListMock.map((car) => new Car(car));

    sinon.stub(Model, 'find').resolves(output);

    const service = new CarService();
    const result = await service.getAllCars();

    expect(result).to.be.deep.equal(output);
  });

  it('lista um array vazio caso não haja carros cadastrados', async function () {
    sinon.stub(Model, 'find').resolves([]);

    const service = new CarService();
    const result = await service.getAllCars();

    expect(result).to.be.deep.equal([]);
  });
});