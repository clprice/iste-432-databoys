'use strict';
module.exports = (sequelize, DataTypes) => {
  const offer = sequelize.define('offer', {
    offerid: DataTypes.INTEGER,
    userid: DataTypes.INTEGER,
    tradeid: DataTypes.INTEGER,
    gameid: DataTypes.INTEGER,
    condition: DataTypes.STRING,
    message: DataTypes.STRING
  }, {});
  offer.associate = function(models) {
    // associations can be defined here
  };
  return offer;
};