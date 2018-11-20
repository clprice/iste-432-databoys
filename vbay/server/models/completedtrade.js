'use strict';
module.exports = (sequelize, DataTypes) => {
  const completedtrade = sequelize.define('completedtrade', {
    completionid: DataTypes.INTEGER,
    tradeid: DataTypes.INTEGER,
    primarytraderid: DataTypes.STRING,
    secondarytraderid: DataTypes.STRING,
    tradedate: DataTypes.DATEONLY
  }, {});
  completedtrade.associate = function(models) {
    // associations can be defined here
  };
  return completedtrade;
};