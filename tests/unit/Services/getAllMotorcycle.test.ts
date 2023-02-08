import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { outputMotorcycleListMock } from '../mocks/motorcycleMocks';

describe('Testes relacionados a função de listar todas as motocicletas cadastradas', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('lista todas as motocicletas com sucesso', async function () {
    const output: Motorcycle[] = outputMotorcycleListMock.map(
      (motorcycle) => new Motorcycle(motorcycle),
    );

    sinon.stub(Model, 'find').resolves(output);

    const service = new MotorcycleService();
    const result = await service.getAllMotorcycle();

    expect(result).to.be.deep.equal(output);
  });

  it('lista um array vazio caso não haja motocicletas cadastradas', async function () {
    sinon.stub(Model, 'find').resolves([]);

    const service = new MotorcycleService();
    const result = await service.getAllMotorcycle();

    expect(result).to.be.deep.equal([]);
  });
});