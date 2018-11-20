module.exports = (sequelize, DataTypes) => {
  const CompletedTrade = sequelize.define('CompletedTrade', {
    completionid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tradeid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    offerid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tradedate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
  });
  CompletedTrade.associate = function (models) {

  };
  return CompletedTrade;
};