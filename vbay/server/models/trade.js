module.exports = (sequelize, DataTypes) => {
  const Trade = sequelize.define('Trade', {
    tradeid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      autoIncrement: true,
      primaryKey: true
    },
    gameid: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Games',
        key: 'gameid'
      }
    },
    userid: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'userid'
      }
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
      foreignKey: 'gameid',
      onDelete: 'CASCADE'
    })
    Trade.belongsTo(models.User, {
      foreignKey: 'userid',
      onDelete: 'CASCADE'
    })
    Trade.hasMany(models.Offer, {
      foreignKey: 'tradeid',
      as: 'offers'
    })
    Trade.hasOne(models.CompletedTrade, {
      foreignKey: 'tradeid'
    })
  }
  return Trade
}