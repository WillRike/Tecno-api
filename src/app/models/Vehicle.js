import { Sequelize, Model } from 'sequelize';

class Vehicle extends Model {
  static init(sequelize) {
    super.init(
      {
        vehicle_name: Sequelize.STRING,
        id_automaker: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Automaker, {
      foreignKey: 'id_automaker',
      as: 'automaker',
    });
  }
}

export default Vehicle;
