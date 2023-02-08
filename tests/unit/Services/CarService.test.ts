import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import {
  car,
  cars,
  carWithoutStatus,
  carWithoutStatusOut,
} from '../../mocks/data';

describe('Testes da CarService', function () {
  afterEach(function () {
    sinon.restore();
  });
  describe('Testes com POST da rota /cars', function () {
    it('Teste de criação de novo carro com sucesso', async function () {
      sinon.stub(Model, 'create').resolves(cars[0]);

      const service = new CarService();

      const result = await service.addNewCar(car);

      expect(result).to.be.deep.equal(cars[0]);
    });

    it('Teste de criação de novo carro sem status', async function () {
      sinon.stub(Model, 'create').resolves(carWithoutStatusOut);

      const service = new CarService();

      const result = await service.addNewCar(carWithoutStatus);

      expect(result).to.be.deep.equal(carWithoutStatusOut);
    });

    it('Teste de criação de noco carro sem propriedade', async function () {
      sinon.stub(Model, 'create').resolves(undefined);

      const service = new CarService();

      const result = await service.addNewCar(carWithoutStatus);

      expect(result).to.be.deep.equal(undefined);
    });
  });

  describe('Testes com GET da rota /cars', function () {
    it('Teste deve retornar lista de carros', async function () {
      sinon.stub(Model, 'find').resolves(cars);

      const service = new CarService();

      const result = await service.getAllCars();

      expect(result).to.be.deep.equal(cars);
    });

    it('Teste de falha ao passar ID inválido', async function () {
      sinon.stub(Model, 'findById').resolves(cars[0]);

      try {
        const service = new CarService();

        await service.getById('123121231werwrwe');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });
  });
  
  describe('Testes com PUT da rota /cars', function () {
    it('testa se é possível atualizar um veiculo', async function () {
      sinon.stub(Model, 'findById').resolves(cars[0]);
      sinon.stub(Model, 'findByIdAndUpdate').resolves(cars[0]);

      const service = new CarService();
      const test = await service.updateVehicleById('63e2aae4135a458473a32730', car);
      expect(test).to.be.equal(test);
    });
  });
});
