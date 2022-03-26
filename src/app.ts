import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import {createConnection} from 'typeorm'

import customerRoutes from './routes/customer.routes'

const app = express();
createConnection();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use(customerRoutes);

const port = process.env.PORT || 3000;

app.listen(port);
console.log('Server on port: ', port);