'use strict';
module.exports = (sequelize, DataTypes) => {
  const auction = sequelize.define('auction', {
    auctionid: DataTypes.INTEGER,
    userid: DataTypes.STRING,
    gameid: DataTypes.INTEGER,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    startprice: DataTypes.DOUBLE
  }, {});
  auction.associate = function(models) {
    // associations can be defined here
  };
  return auction;
};