module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Sales', {
      saleid: {
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      auctionid: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Auctions',
          key: 'auctionid'
        }
      },
      bidid: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Bids',
          key: 'bidid'
        }
      },
      price: {
        allowNull: false,
        type: Sequelize.DOUBLE
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
    queryInterface.dropTable('Sales')
}