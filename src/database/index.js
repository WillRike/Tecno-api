import Sequelize from 'sequelize';

// importar os Models
import Vehicle from '../app/models/Vehicle';
import Automaker from '../app/models/Automaker';

import databaseConfig from '../config/database';

const models = [
  Vehicle,
  Automaker,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
