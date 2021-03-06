module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vehicles', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      vehicle_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      id_automaker:{
        type: Sequelize.INTEGER,
        references: { model: 'automakers', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('vehicles');
  },
};
