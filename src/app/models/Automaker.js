import { Sequelize, Model } from 'sequelize';

class Automaker extends Model {
  static init(sequelize) {
    super.init(
      {
        automaker_name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Automaker;
