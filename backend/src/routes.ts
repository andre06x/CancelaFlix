import express, { response } from 'express';

import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new ItemsController();

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.teste);
routes.get('/points/:id', pointsController.index);

export default routes;
