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
      foreignKey: 'userid',
      onDelete: 'CASCADE'
    })
    Bid.belongsTo(models.Auction, {
      foreignKey: 'auctionid',
      onDelete: 'CASCADE'
    })
    Bid.hasOne(models.Sale, {
      foreignKey: 'saleid',
      onDelete: 'CASCADE'
    })
  }
  return Bid
}