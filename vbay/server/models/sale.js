'use strict';
module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define('sale', {
    saleid: DataTypes.INTEGER,
    auctionid: DataTypes.INTEGER,
    bidid: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    saledate: DataTypes.STRING
  });
  sale.associate = function (models) {
    // associations can be defined here
  };
  return sale;
};