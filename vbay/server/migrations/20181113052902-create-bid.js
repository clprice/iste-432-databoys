module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Bids', {
      bidid: {
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
      auctionid: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Auctions',
          key: 'auctionid'
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
    queryInterface.dropTable('Bids')
};