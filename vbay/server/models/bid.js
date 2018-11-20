'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bid = sequelize.define('Bid', {
    bidid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    auctionid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  });
  Bid.associate = function (models) {
    Bid.hasOne(models.Sale)
  };
  return Bid;
};