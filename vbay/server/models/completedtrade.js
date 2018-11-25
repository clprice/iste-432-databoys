module.exports = (sequelize, DataTypes) => {
  const CompletedTrade = sequelize.define('CompletedTrade', {
    completionid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
    },
    tradeid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    offerid: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
  CompletedTrade.associate = function (models) { }
  return CompletedTrade
}