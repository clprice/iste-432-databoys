module.exports = (sequelize, DataTypes) => {
  const Trade = sequelize.define('Trade', {
    tradeid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      autoIncrement: true,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  Trade.associate = (models) => {
    Trade.belongsTo(models.Game, {
      foreignKey: 'trade_gameid',
      onDelete: 'CASCADE'
    })
    Trade.belongsTo(models.User, {
      foreignKey: 'trade_userid',
      onDelete: 'CASCADE'
    })
    Trade.hasMany(models.Offer, {
      onDelete: 'CASCADE'
    })
    Trade.hasOne(models.CompletedTrade, {
      onDelete: 'CASCADE'
    })
  }
  return Trade
}