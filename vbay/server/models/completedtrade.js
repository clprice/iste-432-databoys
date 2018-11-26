module.exports = (sequelize, DataTypes) => {
  const CompletedTrade = sequelize.define('CompletedTrade', {
    completionid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
    }
  })
  CompletedTrade.associate = function (models) {
    CompletedTrade.belongsTo(models.Trade, {
      foreignKey: 'tradeid',
      onDelete: 'CASCADE'
    })
    CompletedTrade.belongsTo(models.Offer, {
      foreignKey: 'offerid',
      onDelete: 'CASCADE'
    })
  }
  return CompletedTrade
}