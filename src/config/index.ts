import dotenv from 'dotenv';
dotenv.config();
import env from 'env-var';
// const env = require('env-var');
// require('dotenv').config();

export default {
  mercadoPagoAccessToken: env.get('MP_ACCESS_TOKEN').required(true).asString(),
};

