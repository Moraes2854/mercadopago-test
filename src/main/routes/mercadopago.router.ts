import express from 'express';
import MercadoPago from '../libs/mercadopago/mercadopago.class';
import validatorHandler from '../middlewares/validator.middleware';
import { getPaymentLinkSchema } from '../schemas/mercadopago.schema';
import { success } from '../helpers/responseApi.helper';
import { MercadoPagoItem } from '../../interfaces/mercadopago.interface';

const mercadoPago = new MercadoPago();
const router = express.Router();

router.post('/getPaymentLink',
  validatorHandler(getPaymentLinkSchema, 'body'),
  async (req, res, next) => {
    try {
      const { payer_email, quantity } = req.body;

      const item: MercadoPagoItem = {
        title: 'Reserva',
        category_id: 'category123',
        currency_id: 'ARS',
        description: 'Descripcion de la reserva',
        picture_url: 'xd',
        quantity,
        unit_price: 10
      }
      const paymentLink = await mercadoPago.getPaymentLink( payer_email, item );
      const statusCode = 201;
      return res.status(statusCode).json(success('Payment link', paymentLink, statusCode));
    } catch (error) {
      next(error);
    }
  }
);

export default router;




