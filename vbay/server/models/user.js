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
      foreignKey: 'userid',
      as: 'selling'
    })
    User.hasMany(models.Bid, {
      foreignKey: 'auctionid'
    })
    User.hasMany(models.Trade, {
      foreignKey: 'userid',
      as: 'trading'
    })
    User.hasMany(models.Offer, {
      foreignKey: 'userid'
    })
  }
  return User
}