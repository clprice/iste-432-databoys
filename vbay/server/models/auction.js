module.exports = (sequelize, DataTypes) => {
  const Auction = sequelize.define('Auction', {
    auctionid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    startprice: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  })
  Auction.associate = (models) => {
    Auction.belongsTo(models.User, {
      foreignKey: 'auction_userid',
      onDelete: 'CASCADE'
    })
    Auction.belongsTo(models.Game, {
      foreignKey: 'auction_gameid',
      onDelete: 'CASCADE'
    })
    Auction.hasMany(models.Bid, {
      foreignKey: 'auction_bidid'
    })
  }
  return Auction
}