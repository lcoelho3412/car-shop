import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import {
  motorcycle,
  motorcycles,
  motorcycleWithoutStatus,
  motorcycleWithoutStatusOut,
} from '../../mocks/data';

describe('Testes da MotorcycleService', function () {
  describe('Testes com POST da rota /motorcycles', function () {
    it('Teste de criação de nova moto com sucesso', async function () {
      sinon.stub(Model, 'create').resolves(motorcycles[0]);

      const service = new MotorcycleService();

      const result = await service.addMotorcycle(motorcycle);

      expect(result).to.be.deep.equal(motorcycles[0]);
    });

    it('Teste de criação de nova moto sem status', async function () {
      sinon.stub(Model, 'create').resolves(motorcycleWithoutStatusOut);

      const service = new MotorcycleService();

      const result = await service.addMotorcycle(motorcycleWithoutStatus);

      expect(result).to.be.deep.equal(motorcycleWithoutStatusOut);
    });

    it('Teste de criação de nova moto sem propriedade', async function () {
      sinon.stub(Model, 'create').resolves(undefined);

      const service = new MotorcycleService();

      const result = await service.addMotorcycle(motorcycleWithoutStatus);

      expect(result).to.be.deep.equal(undefined);
    });
  });

  describe('Testes com GET da rota /motorcycles', function () {
    it('Teste deve retornar lista de motos', async function () {
      sinon.stub(Model, 'find').resolves(motorcycles);

      const service = new MotorcycleService();

      const result = await service.getAllMotorcycle();

      expect(result).to.be.deep.equal(motorcycles);
    });

    it('Teste de falha ao passar ID inválido', async function () {
      sinon.stub(Model, 'findById').resolves(motorcycles[0]);

      try {
        const service = new MotorcycleService();

        await service.getById('63e2b814135a458473a3275q');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });
  });

  describe('Testes com PUT da rota /motorcycles', function () {

  });

  describe('Testes com PUT da rota /cars', function () {
    it('testa se é possível atualizar um veiculo', async function () {
      sinon.stub(Model, 'findById').resolves(motorcycles[0]);
      sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycles[0]);

      const service = new MotorcycleService();
      const test = await service.updateVehicleById('63e2aae4135a458473a32730', motorcycle);
      expect(test).to.be.equal(test);
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});
