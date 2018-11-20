'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      saleid: {
        type: Sequelize.INTEGER
      },
      auctionid: {
        type: Sequelize.INTEGER
      },
      sellerid: {
        type: Sequelize.STRING
      },
      buyerid: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DOUBLE
      },
      saledate: {
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
    return queryInterface.dropTable('sales');
  }
};