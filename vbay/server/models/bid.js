module.exports = (sequelize, DataTypes) => {
  const Bid = sequelize.define('Bid', {
    bidid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      autoIncrement: true,
      primaryKey: true
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  })
  Bid.associate = function (models) {
    Bid.belongsTo(models.User, {
      foreignKey: 'bid_userid',
      onDelete: 'CASCADE'
    })
    Bid.belongsTo(models.Auction, {
      foreignKey: 'bid_auctionid',
      onDelete: 'CASCADE'
    })
    Bid.hasOne(models.Sale, {
      foreignKey: 'sale_bidid',
      onDelete: 'CASCADE'
    })
  }
  return Bid
}