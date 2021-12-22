import './bootstrap';

import express from 'express';
import cors from 'cors';
// import path from 'path';
import Routes from './routes';

import './database';

// const cors = require('cors');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(express.json());
  }

  routes() {
    this.server.use(Routes);
  }
}

export default new App().server;
