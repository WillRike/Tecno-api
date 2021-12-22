import { Router } from 'express';

import AutomakerController from './app/controllers/AutomakerController';
import VehicleController from './app/controllers/VehicleController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/registerautomaker', AutomakerController.store);
routes.get('/getautomakers', AutomakerController.index);
routes.put('/updateautomaker', AutomakerController.update);

routes.post('/registervehicle', VehicleController.store);
routes.get('/getvehicles', VehicleController.index);
routes.put('/updatevehicle', VehicleController.update);

routes.use(authMiddleware);

export default routes;
