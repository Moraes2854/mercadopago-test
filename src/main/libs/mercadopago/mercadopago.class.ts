import axios from 'axios';
import { MercadoPagoItem } from '../../../interfaces/mercadopago.interface';
import config from '../../../config';

class MercadoPago {
    constructor(){}

    async getPaymentLink( payer_email: string, item: MercadoPagoItem ) {
        const url = "https://api.mercadopago.com/checkout/preferences";
    
        const body = {
          payer_email,
          items: [ item ],
          back_urls: {
            failure: "/failure",
            pending: "/pending",
            success: "/success"
          },
        };
    
        const payment = await axios.post(url, body, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${config.mercadoPagoAccessToken}`
          }
        });
    
        if ( !payment.data.init_point ) throw new Error(`Init poit does not exists`);

        return payment.data.init_point;
    }
}

export default MercadoPago;