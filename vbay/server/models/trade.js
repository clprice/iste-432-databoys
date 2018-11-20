module.exports = (sequelize, DataTypes) => {
  const Trade = sequelize.define('Trade', {
    tradeid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gameid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userid: {
      type: DataTypes.STRING,
      allowNull: false
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
    Trade.hasMany(models.Offer, {
      onDelete: 'CASCADE'
    })
    Trade.hasOne(models.CompletedTrade, {
      onDelete: 'CASCADE'
    })
  }
  return Trade
}