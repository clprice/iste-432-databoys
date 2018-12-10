module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Offers', {
      offerid: {
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userid: {
        allowNull: false,
        type: Sequelize.STRING,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'userid'
        }
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
      gameid: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Games',
          key: 'gameid'
        }
      },
      condition: {
        allowNull: false,
        type: Sequelize.STRING
      },
      message: {
        allowNull: true,
        type: Sequelize.STRING
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
    queryInterface.dropTable('Offers')
}