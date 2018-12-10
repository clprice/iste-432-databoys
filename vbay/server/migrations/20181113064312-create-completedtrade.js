module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('CompletedTrades', {
      completionid: {
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tradeid: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Trades',
          key: 'tradeid'
        }
      },
      offerid: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Offers',
          key: 'offerid'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable('CompletedTrades')
}