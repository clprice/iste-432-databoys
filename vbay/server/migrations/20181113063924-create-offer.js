module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('offers', {
      offerid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userid: {
        allowNull: false,
        type: Sequelize.STRING,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'userid'
        }
      },
      tradeid: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'trades',
          key: 'tradeid'
        }
      },
      gameid: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'games',
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('offers');
  }
};