import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import routerApi from './main/routes';
import errorHandler from './main/middlewares/error.handler.middleware';

const app = express();
app.use( express.json() );
app.use( cors() );
app.use( cookieParser() );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( express.urlencoded({ extended: false }) );
app.get('/', (req, res) => {
  res.json({ message: 'OK!' });
});

routerApi( app );
//@ts-ignore
app.use( errorHandler );

app.listen(3000, () => {
  console.log(`App listening in ${3000}`);
});