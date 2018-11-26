module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    saleid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      autoIncrement: true,
      primaryKey: true
    },
    auctionid: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Auctions',
        key: 'auctionid'
      }
    },
    bidid: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Bids',
        key: 'bidid'
      }
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    saledate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
  })
  Sale.associate = function (models) {
    Sale.belongsTo(models.Auction, {
      foreignKey: 'auctionid',
      onDelete: 'CASCADE'
    })
    Sale.belongsTo(models.Bid, {
      foreignKey: 'bidid',
      onDelete: 'CASCADE'
    })
  }
  return Sale
}