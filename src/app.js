import express from 'express';
import cors from 'cors';
//import path from 'path';
import Routes from './routes';

import './database';

//const cors = require('cors');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    /*this.server.use((req, res, next) => {
      //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
        res.header("Access-Control-Allow-Origin", "*");
      //Quais são os métodos que a conexão pode realizar na API
        res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
     //   res.header("Access-Control-Allow-Headers", '*');
       // res.header("Access-Control-Max-Age:", '86400');
        this.server.use(cors());
        console.log('Chegou aqui!')
        next();
    });*/

    this.server.use(express.json());



    /*this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );*/


  }

  routes() {
    this.server.use(Routes);
  }
}

export default new App().server;
