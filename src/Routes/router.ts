import { Router } from 'express';
import carRouter from './cars.routes';
import motorcyclesRouter from './motorcycles.routes';

const routes = Router();

routes.use('/cars', carRouter);

routes.use('/motorcycles', motorcyclesRouter);

export default routes;