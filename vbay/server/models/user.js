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
      onDelete: 'CASCADE'
    })
    User.hasMany(models.Bid, {
      onDelete: 'CASCADE'
    })
    User.hasMany(models.Trade, {
      onDelete: 'CASCADE'
    })
    User.hasMany(models.Offer, {
      onDelete: 'CASCADE'
    })
  }
  return User
}