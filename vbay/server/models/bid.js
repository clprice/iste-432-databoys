'use strict';
module.exports = (sequelize, DataTypes) => {
  const bid = sequelize.define('bid', {
    bid: DataTypes.INTEGER,
    userid: DataTypes.STRING,
    auctionid: DataTypes.INTEGER,
    price: DataTypes.DOUBLE
  }, {});
  bid.associate = function(models) {
    // associations can be defined here
  };
  return bid;
};