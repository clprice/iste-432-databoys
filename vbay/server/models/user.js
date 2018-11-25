module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userid: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lname: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })
  User.associate = function (models) {
    User.hasMany(models.Auction, {
      foreignKey: 'auction_userid'
    })
    User.hasMany(models.Bid, {
      foreignKey: 'bid_auctionid'
    })
    User.hasMany(models.Trade, {
      foreignKey: 'trade_userid'
    })
    User.hasMany(models.Offer, {
      foreignKey: 'offer_userid'
    })
  }
  return User
}