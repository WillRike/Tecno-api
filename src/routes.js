import { Router } from 'express';
//import multer from 'multer';
//import multerConfig from './config/multer';

// import UserController from './app/controllers/UserController';
// import SessionController from './app/controllers/SessionController';
//import FileController from './app/controllers/FileController';
// import ProviderController from './app/controllers/ProviderController';
//import ServiceOrderController from './app/controllers/ServiceOrderController';
//import ScheduleController from './app/controllers/ScheduleController';
// import ProfessionController from './app/controllers/ProfessionController';
// import AddressController from './app/controllers/AddressController';
// import ProfessionProviderController from './app/controllers/ProfessionProviderController';
import AutomakerController from './app/controllers/AutomakerController';
import VehicleController from './app/controllers/VehicleController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
//const upload = multer(multerConfig);
// routes.post('/users', UserController.store);
// routes.post('/sessions', SessionController.store);
routes.get('/automakerregister', AutomakerController.index);
routes.post('/automakerregister', AutomakerController.store);
routes.put('/automakerregister', AutomakerController.update);

routes.get('/vehicleregister', VehicleController.index);
routes.post('/vehicleregister', VehicleController.store);
routes.put('/vehicleregister', VehicleController.update);

routes.use(authMiddleware);

//routes.put('/users', UserController.update);

// routes.post('/professionproviders', ProfessionProviderController.store);
//routes.get('/professionproviders', ProfessionProviderController.index);
//routes.get('/providers', ProviderController.index);

//routes.get('/serviceorders', ServiceOrderController.index);
//routes.post('/serviceorders', ServiceOrderController.store);

//routes.get('/schedule', ScheduleController.index);

//routes.post('/files', upload.single('file'), FileController.store);

// routes.post('/professions', ProfessionController.store);
//routes.get('/professions', ProfessionController.index);

// routes.post('/addresses', AddressController.store);
//routes.put('/addresses', AddressController.update);

export default routes;
