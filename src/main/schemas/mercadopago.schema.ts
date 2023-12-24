import Joi from 'joi';

const payer_email = Joi.string().email();
const quantity = Joi.number();


export const getPaymentLinkSchema = Joi.object({
    payer_email: payer_email.required(),
    quantity: quantity.required(),
});
