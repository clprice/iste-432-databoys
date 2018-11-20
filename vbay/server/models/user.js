module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userid: {
      type: DataTypes.STRING,
      allowNull: false
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
  });
  User.removeAttribute('id');
  User.associate = function (models) {
    User.hasMany(models.Auction)
    User.hasMany(models.Bid)
    User.hasMany(models.Trade)
    User.hasMany(models.Offer)
  };
  return User;
};