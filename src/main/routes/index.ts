import express, { Application } from 'express';
import mercadoPagoRouter from './mercadopago.router';

function routerApi ( app: Application ) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/mercadopago', mercadoPagoRouter);
}

export default routerApi;

