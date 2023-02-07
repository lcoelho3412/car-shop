import { Router } from 'express';
import carRouter from './cars.routes';

const routes = Router();

routes.use('/cars', carRouter);

export default routes;