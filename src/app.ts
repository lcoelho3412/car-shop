import express from 'express';
import router from './Routes/router';
import ErrorHandler from './middlewares/ErrorHandler';

const app = express();

app.use(router);
app.use(ErrorHandler.handle);

export default app;
