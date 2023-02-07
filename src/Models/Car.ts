import { Model, model, models, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';

export default abstract class CarODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async find(): Promise<T[]> {
    return this.model.find();
  }

  public async findAll(): Promise<T[]> {
    return this.model.find({});
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async findById(id: string): Promise<T | null> {
    return this.model.findById(id);
  }

  public async updateById(id: string, body: ICar) {
    return this.model.findByIdAndUpdate(id, body);
  }
}