'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bid = sequelize.define('Bid', {
    bid: DataTypes.INTEGER,
    userid: DataTypes.STRING,
    auctionid: DataTypes.INTEGER,
    price: DataTypes.DOUBLE
  });
  Bid.associate = function (models) {

  };
  return Bid;
};