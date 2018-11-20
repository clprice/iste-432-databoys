'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('completedtrades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      completionid: {
        type: Sequelize.INTEGER
      },
      tradeid: {
        type: Sequelize.INTEGER
      },
      primarytraderid: {
        type: Sequelize.STRING
      },
      secondarytraderid: {
        type: Sequelize.STRING
      },
      tradedate: {
        type: Sequelize.DATEONLY
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
    return queryInterface.dropTable('completedtrades');
  }
};